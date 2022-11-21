function oblicz()
{
    var wynik =document.getElementById('wynik');
    var ilosc = document.getElementById('ilosc').value;
    var staly = document.getElementById('staly').checked;
    var cena=0

    if (ilosc >= 1 && ilosc<= 50)
    {
        if(staly)
            cena=ilosc*(2-0.20);
        else
            cena=ilosc*2;
    }
    if(ilosc>=51)
    {
        if(staly)
            cena=ilosc*(1-0.20);
            else
             cena = ilosc*1;   
    }
    wynik.innerHTML="Twoje ogloszenia będą kosztować:"+cena+"PLN";
}