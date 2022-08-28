// Create a Map

'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});


const degerTablosu=new Map(
[
                ["ا"  ,1 ] ,  
                ["ب",2],      //noktalı
                ["پ",2],      //noktalı
                ["ت",400] ,   //noktalı  
                ["ج",3],//noktalı
                ["د",4],
                ["ه",5],
                ["و",6],
                ["ز",7],//noktalı
                ["ح",8],
                ["ط",9],
                ["ي",10],//noktalı
                ["ك",20],
                ["ل",30],
                ["م",40],
                ["ن",50],//noktalı
                ["س",60],
                ["ع",70],
                ["ف",80],//noktalı
                ["ص",90],
                ["ق",100],//noktalı
                ["ر",200],
                ["ش",300],//noktalı
                ["ث",500],//noktalı
                ["خ",600],//noktalı
                ["ذ",700],//noktalı
                ["ض",800],//noktalı
                ["ظ",900],//noktalı
                ["غ",1000],//noktalı
                ["چ",3],//noktalı
                ["ژ",7],//noktalı
                ["ک",100],
                ["گ",100],
                [" ",0],             
                ["ی",10] ,//noktalı
                ["ئ",1],
                ["ي",10],//noktalı
                ["ء",1],
                ["آ",1]
              
]);



const degerNoktasiz=new Map(
[
                              ["ا",1 ],  
                              ["د",4],
                              ["ه",5],
                              ["و",6],
                              ["ح",8],
                              ["ط",9],
                              ["ك",20],
                              ["ل",30],
                              ["م",40],
                              ["س",60],
                              ["ع",70],
                              ["ص",90],
                              ["ر",200],
                              ["ک",100],
                              ["گ",100],
                              [" ",0],             
                              ["ئ",1],
                              ["ء",1],
                              ["آ",1]
                            
]);
              


const degerNoktali=new Map(
  [
                
                ["ب",2],      //noktalı
                ["پ",2],      //noktalı
                ["ت",400] ,   //noktalı  
                ["ج",3],//noktalı
                ["ز",7],//noktalı
                ["ي",10],//noktalı
                ["ن",50],//noktalı
                ["ف",80],//noktalı
                ["ق",100],//noktalı
                ["ش",300],//noktalı
                ["ث",500],//noktalı
                ["خ",600],//noktalı
                ["ذ",700],//noktalı
                ["ض",800],//noktalı
                ["ظ",900],//noktalı
                ["غ",1000],//noktalı
                ["چ",3],//noktalı
                ["ژ",7],//noktalı
                ["ی",10] ,//noktalı
                ["ي",10],//noktalı
                
                
  ]);



              

             




//const arrNoktasiz=[ "ا","د","ه","و","ح","ط","ك","ل","م","س","ع","ص","ر","ک","گ","ئ","ء","آ"];
//const arrNoktasiz2=[ ا,د,ه,و,ح,ط,ك,ل,م,س,ع,ص,ر,ک,گ,ئ,ء,آ];
              
function hesap(){

   
    var mText=document.getElementById("minput").value;
    
    var sum=0;
    var noktasiz=0;
    var noktali=0;
    
    var myArray =mText.split("");
    var wrongKey=new Array();

    for (var i=0;i<myArray.length;i++)
    {
    
      if(degerTablosu.has(myArray[i])){

        var c=degerTablosu.get((myArray[i]));

        sum +=c;
            
        if(degerNoktasiz.has(myArray[i])  ){
      
          noktasiz+=c;

        }else{
        
          noktali+=c;


      
        }


      }else
      {

        wrongKey.push(myArray[i]);
      }
      
    };
    
    if(wrongKey.length>0)
    {
      document.getElementById("hata").innerHTML="Hata= "+wrongKey+" tanımlanmamış.";

    }else{
      document.getElementById("hata").innerHTML="";

    };
    document.getElementById("toplam").innerHTML="Toplam= "+sum;
    document.getElementById("noktali").innerHTML="Noktali ="+noktali;
    document.getElementById("noktasiz").innerHTML="Noktasiz= "+noktasiz;
                                             


  };

 
  
