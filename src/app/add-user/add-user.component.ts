import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DialogComponent} from '../dialog';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})

export class AddUserComponent implements OnInit {
  center: Array<number> = [51.4054, 35.7010 ];
  // tslint:disable-next-line:max-line-length
  apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY0NWMxZjM5NDYyOWU4MGI4N2Q5ZWRhZDQ3MGI5ZWU5ZTEzYmVkNjJiOTJkZmJkY2Q0NDI2ZjM4ZTYzODVhZTVjMWQxMTFmZDUzMjE1OTU4In0.eyJhdWQiOiI3OTk5IiwianRpIjoiZjQ1YzFmMzk0NjI5ZTgwYjg3ZDllZGFkNDcwYjllZTllMTNiZWQ2MmI5MmRmYmRjZDQ0MjZmMzhlNjM4NWFlNWMxZDExMWZkNTMyMTU5NTgiLCJpYXQiOjE1ODIxMDgzOTMsIm5iZiI6MTU4MjEwODM5MywiZXhwIjoxNTg0NTI3NTkzLCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.FCc9v2olhiy4xTUwJ9YDe5UiOT1thElNoGtwTRXz1ratYsvyfJDPuY7MWXbMRGnvZNFosXvkpOt-TIp816vv3wiU9IjLNzVC0VnxuUMr8TyoJa5ATYL-Z2deLMiRpz_IfgmUpv653j-Cx9Wtg4JcQoI5m2lIL_z7yy7rIM-Ib-pG1tvqroQuoylsJbOtsF-Bu2gah26430HMHl-toZ-2VdKdYzNqo8YymBV_Dq-UtwceryVJ7zSYEzeJBR-EAWEBFVnCeSi3wAWW2Y2MU7x7x1tgAq7NNJAx9dLj0EJeaIU-zpX5XqhWqpdoHSiOd-DN_RqlPRUVrAbwCmmlBBIkeQ';
  selectable = true;
  res: string;
  responseokey = 'درخواست شما با موفقیت ثبت شد';
  responsefailed = 'درخواست شما ناموفق بود';
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = [
    'ایرانی و سنتی',
    'ایتالیایی و ملل',
    'فست فود',
    'سفره خونه',
    'بوفه',
    'کافی شاپ',
    'صبحانه',
    'کیترینگ',
    'تور های مسافرتی',
    'هتل و اقامتگاه',
    'شهربازی و مراکز تفریحی',
    'بازی های گروهی و زمین بازی',
    'استخر و ورزش های آبی',
    'ورزش های هوایی',
    'باشگاه ورزشی',
    'لیزر موهای زائد',
    'ژل و بوتاکس',
    'خدمات تناسب اندام و لاغری',
    'ماساژ',
    'پوست و زیبایی',
    'خدمات دندانپزشکی',
    'نمایشی و فرهنگی',
    'آتلیه و خدمات چاپ',
    'تئاتر',
    'کنسرت',
    'سینما',
    'کامپیوتر',
    'موسیقی',
    'آشپزی',
    'زبان های خارجی',
    'گردهمایی و همایش',
    'هنر',
    'حسابداری',
    'مهارت های فردی',
    'آرایش مو و صورت',
    'خدمات ناخن',
    'خدمات پوست',
    'اپیلاسیون',
    'کالای دیجیتال و لوازم جانبی',
    'خانه و آشپزخانه',
    'آرایشی بهداشتی و پزشکی',
    'مد، پوشاک و اکسسوری',
    'کودکانه و سرگرمی',
    'ورزش و سفر',
    'ملزومات اداری و هنر',
    'ابزارآلات',
    'نرم افزار و بازی',
    'سوپر مارکت',
    'خدمات',
    'بمب',
    'رستوران',
    'فقط اسکوین',
    'کوپن',
    'پیشنهاد رایگان',
    'محصولات',
    'بوفه'
  ];

  @ViewChild('fruitInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  title = '';
  description = '';
  shortdescription = '';
  timedelta = '';
  oldcost: '';
  off: '';
  link: '';
  rate: '';
  ratecount: '';
  bought: '';
  long: '';
  lat: '';
  scost: '';
  cost: '';
  features: '';
  payway: '';
  address: '';
  piclink: '';
  categories: string;
  day: '';
  houre: '';
  constructor(private http: HttpClient , public dialog: MatDialog) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    this.res = this.responsefailed;
  }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
  find() {
    this.center = [Number(this.lat), Number(this.long)];
  }
  submit() {
    this.timedelta = String((Number(this.day) * 24) + Number(this.houre));
    // this.fruits.map(item => {
    //   this.categories += item + ',';
    // });
    for (const fruit of this.fruits) {
      this.categories += (this.allFruits.indexOf(fruit) + 1) + ',';
    }
    this.categories = this.categories.slice(0, -1);
    this.categories = this.categories.replace('undefined', '');
    this.http.post('https://parsbeacon.ir/requests/submit_new_ad', JSON.stringify({title: this.title , description: this.description ,
    shortdescription : this.shortdescription, timedelta : + this.timedelta ,
    oldcost: +this.oldcost,
    off: +this.off,
    link: this.link,
    rate: +this.rate,
    ratecount: +this.ratecount,
    bought: +this.bought,
    long: +this.long,
    lat: +this.lat,
    scost: +this.scost,
    cost: +this.cost,
    features: this.features,
    payway: this.payway,
    address: this.address,
    piclink: this.piclink,
    categories: this.categories,
    })).subscribe(response =>
      this.responsehandler(response), error1 => this.openDialog(this.res));
    // this.req = this.adduser + this.username + '/' + this.score;
    // this.http.get(this.req).toPromise().then(response =>
    //   console.log(response)
  }
  responsehandler(response: any) {
    if (response === 1) {
      this.res = this.responseokey;
    }
    this.openDialog(this.res);
  }
  openDialog(response): void {
    this.dialog.open(DialogComponent, {
      width: '60vw',
      data: response
    });
  }
}
