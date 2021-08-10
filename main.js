      // Admin Giriş Bilgiler
      var kullanicilar = [{ kullaniciAdi: "Rubble", parola: "Ts6116Ts" },
        { kullaniciAdi: "admin", parola: "1234" },
        { kullaniciAdi: "hacker", parola: "hacker123" }];
      //

      // Admin Giriş Sistem Kontrol 
      var girilenKullaniciAd;
      var girilenParola;

      var x;

      function kontrolEt() {

        girilenKullaniciAd = document.getElementById("kullaniciAdi").value;
        girilenParola = document.getElementById("parola").value;

        for (x of kullanicilar) {

          if ((x.kullaniciAdi == girilenKullaniciAd) && (x.parola == girilenParola)) {

            return true;

          }
          else {
            return false;
          }

        }

      }
      //

      // Admin Giriş Onayı
      function girisOnayi() {

        kontrolEt();

        if (kontrolEt()) {
          // Yönlendirilen Sayfa
          window.open("rubble.html", "_self");

        }
        else {
          alert("Hatalı Kullanıcı Adı Yada Parola, Lütfen Tekrar deneyiniz...");
          document.getElementById("kullaniciAdi").value = "";
          document.getElementById("parola").value = "";
        }

      }
        // Şifre Gösterme
        function show() {
          var parola = document.getElementById('parola');
          var icon = document.querySelector('.fas');
          if (parola.type === "password") {
            parola.type = "text";
            parola.style.marginTop = "20px";
            icon.style.color = "#7f2092";
          } else {
            parola.type = "password";
            icon.style.color = "black";
          }
        }
        
