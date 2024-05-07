/*
//1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın.
let hasil = 1;
let cem = 0;
for(let eded = 1; eded <= 10; eded++){
  cem += eded;
  hasil *= eded;
}
console.log(cem,"cem:");
console.log(hasil,"hasil:");

//1-dən 100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın
let hasil = 1;
let cem = 0;

for (let eded = 1; eded <=100; eded ++){
  if(eded % 2 == 0){
     cem += eded;
     hasil *= eded;
  }
}
console.log(cem,"cem:");
console.log(hasil,"hasil:");

//3 rəqəmli ədədlərin ədədi ortasını tapın
let cem = 0;

for (let eded = 100; eded <= 999; eded++) {
  cem += eded;
}

let average = cem / 900; 

console.log(average, "average"); 

//3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın
for (let eded = 100; eded <= 999; eded++) {
  if (eded % 7 == 0 && eded % 8 == 0) {
    console.log(eded);
  }
}

//3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın
let cem = 0;

for (let eded = 100; eded <= 999; eded++) {
  if (eded % 7 == 0 && eded % 8 == 0) {
    cem += eded;
    console.log(eded);
  }
}

console.log("Cem:", cem);

//3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın
let cem = 0;

for (let eded = 100; eded <= 999; eded++) {
  if (eded % 7 == 0 && eded % 8 == 0) {
    console.log("İlk 7 və 8-ə bölünən ədəd:", eded);
    break;
  }
}

//3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.
let son_eded = 0;
for (let eded=999;eded>=100;eded--){
  if(eded%7==0 && eded%8==0)
  son_eded=eded;
  console.log(eded);
  break;
}
console.log("7 ve 8 bolunen eded:", son_eded);

//1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın
let sadeEdedler = "";
let murekkebEdedler = "";

for (let eded = 2; eded <= 100; eded++) {
    let saded = true;

    for (let i = 2; i <= Math.sqrt(eded); i++) {
        if (eded % i === 0) {
            saded = false;
            break;
        }
    }

    if (saded) {
        sadeEdedler += eded + ", ";
    } else {
        murekkebEdedler += eded + ", ";
    }
}

console.log("Sadə ədədlər:", sadeEdedler);
console.log("Mürəkkəb ədədlər:", murekkebEdedler);

//İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana
cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)
let eded = prompt("Bir ədəd daxil edin:");

if (eded % 2 === 0) {
    console.log("Cütdür");
} else {
    console.log("Təkdir");
}

//İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli
tətbiq edib nəticəni ekrana çıxarın.
let rəqəm1 = parseInt(prompt("Birinci rəqəmi daxil edin:"));
let rəqəm2 = parseInt(prompt("İkinci rəqəmi daxil edin:"));
let əməl = prompt("Toplama üçün +, çıxmaq üçün -, vurmaq üçün *, bölmək üçün / əməlini daxil edin:");

let nəticə;

if (əməl === "+") {
    nəticə = rəqəm1 + rəqəm2;
} else if (əməl === "-") {
    nəticə = rəqəm1 - rəqəm2;
} else if (əməl === "*") {
    nəticə = rəqəm1 * rəqəm2;
} else if (əməl === "/") {
    if (rəqəm2 === 0) {
        nəticə = "0-a bölünmə yolverilmişdir!";
    } else {
        nəticə = rəqəm1 / rəqəm2;
    }
} else {
    nəticə = "Yanlış əməl daxil edildi!";
}

console.log("Nəticə:", nəticə);

//Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.
let eded = parseInt(prompt("Bir ədəd daxil edin:"));

console.log("Daxil edilmiş ədəd:", eded);

console.log("Bölünənlər:");

for (let i = 100; i < 1000; i++) {
    if (i % eded === 0) {
        console.log(i);
    }
}

//Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.
let eded = parseInt(prompt("Bir ədəd daxil edin:"));
console.log("Daxil edilmiş ədəd:", eded);

console.log("Bütün tam bölənlər:");
for (let i = 1; i <= eded; i++) {
    if (eded % i === 0) {
        console.log(i);
    }
}

//Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) Meselen: 1 =&gt; bazarertesi,
3=&gt; cersenbe (heftenin 7 gunu ucun)
let rəqəm = parseInt(prompt("1 ilə 7 arasında bir rəqəm daxil edin:"));

switch (rəqəm) {
    case 1:
        console.log("Bazar ertəsi");
        break;
    case 2:
        console.log("Çərşənbə axşamı");
        break;
    case 3:
        console.log("Çərşənbə");
        break;
    case 4:
        console.log("Cümə axşamı");
        break;
    case 5:
        console.log("Cümə");
        break;
    case 6:
        console.log("Şənbə");
        break;
    case 7:
        console.log("Bazar");
        break;
    default:
        console.log("Düzgün olmayan bir rəqəm daxil etdiniz. 1 ilə 7 arasında bir rəqəm daxil edin.");
}

//Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. Meselen : 5 (may ayı 5-cidir) output: Yaz fesli
alertə çıxarın.
let ay = parseInt(prompt("Ayın sıra nömrəsini daxil edin (1-12 arası):"));

let fesl;

switch (ay) {
    case 12:
    case 1:
    case 2:
        fesl = "Qış fəsli";
        break;
    case 3:
    case 4:
    case 5:
        fesl = "Yaz fəsli";
        break;
    case 6:
    case 7:
    case 8:
        fesl = "Yay fəsli";
        break;
    case 9:
    case 10:
    case 11:
        fesl = "Payız fəsli";
        break;
    default:
        fesl = "Düzgün olmayan bir ay sıra nömrəsi daxil etdiniz. 1 ilə 12 arasında bir sıra nömrəsi daxil edin.";
}

alert(fesl);

//Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.

0 &gt;  cox soyuq
0-15 derece  soyuq
15-30 derece  isti

30&lt;  cox isti
Əgər heç biri deyilse alerte versin ki temperatur yanlışdır.

let temperatura = parseFloat(prompt("Temperaturu daxil edin:"));

let havaninVeziyyeti;

switch (true) {
    case temperatura < 0:
        havaninVeziyyeti = "Çox soyuq";
        break;
    case temperatura >= 0 && temperatura <= 15:
        havaninVeziyyeti = "Soyuq";
        break;
    case temperatura > 15 && temperatura <= 30:
        havaninVeziyyeti = "İsti";
        break;
    case temperatura > 30:
        havaninVeziyyeti = "Çox isti";
        break;
    default:
        havaninVeziyyeti = "Temperatur yanlışdır";
}

alert(havaninVeziyyeti);
*/

