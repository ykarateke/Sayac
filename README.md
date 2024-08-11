İşte `README.md` dosyasını kod blokları ve uygun düzenlemelerle oluşturacak şekilde yazılmış hali:

```markdown
# CounterApp - React Native Sayaç Uygulaması

Bu proje, kullanıcıların ekrana her tıkladığında bir sayacı artırmasını ve uygulamadan çıkıp
tekrar girdiğinde bile bu sayaç değerinin korunmasını sağlayan basit bir React Native uygulamasıdır.
Ayrıca, kullanıcıların sayacı sıfırlamasına olanak tanıyan bir buton da eklenmiştir.

## Özellikler

- **Sayaç Artırma:** Kullanıcı her ekrana tıkladığında sayaç değeri 1 artar.
- **Kalıcı Depolama:** Sayaç değeri, uygulama kapatılıp açıldığında bile kaybolmaz.
- **Sayaç Sıfırlama:** Kullanıcı, "Sıfırla" butonuna tıklayarak sayacı sıfırlayabilir.

## Kullanılan Teknolojiler

- **React Native:** Mobil uygulamalar geliştirmek için kullanılan JavaScript tabanlı framework.
- **AsyncStorage:** React Native'de kalıcı veriler saklamak için kullanılan bir depolama API'si.

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu Klonlayın:**

   ```bash
   git clone https://github.com/kullaniciadi/counter-app.git
   cd counter-app
   ```

2. **Gerekli Paketleri Yükleyin:**

   ```bash
   npm install
   ```

3. **Uygulamayı Çalıştırın:**

   - iOS: 
   
     ```bash
     npx react-native run-ios
     ```
   - Android: 
     
     ```bash
     npx react-native run-android
     ```

## Kullanılan Kütüphaneler

### 1. **@react-native-async-storage/async-storage**

- **Açıklama:** `AsyncStorage`, küçük anahtar-değer çiftlerini yerel olarak saklamak için kullanılır.
- Bu projede, sayaç değerini uygulama kapatılıp açıldığında bile saklamak için kullanıyoruz.
- **Kurulum:**

  ```bash
  npm install @react-native-async-storage/async-storage
  ```

- **Neden Kullanıldı?**: Kullanıcı verilerini kalıcı hale getirmek için, örneğin sayaç değerini saklayıp,
- kullanıcı tekrar uygulamayı açtığında bu değeri geri yüklemek için.

## Kullanım

Uygulamayı başlattığınızda ekranda bir sayaç ve iki buton görünecektir:

- **Arttır** butonuna her tıkladığınızda sayaç değeri bir artar.
- **Sıfırla** butonuna tıkladığınızda sayaç değeri sıfırlanır.

Kullanıcı uygulamadan çıkıp yeniden girdiğinde, en son kaydedilen sayaç değeri yüklenir.

## Katkıda Bulunma

Katkıda bulunmak için projeyi forklayabilir ve değişikliklerinizi pull request olarak gönderebilirsiniz.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
```

Bu dosya, proje hakkında gerekli tüm bilgileri kod blokları ve formatlandırmalarla düzenli bir şekilde sunar.
Projeyi klonlayıp kurulum adımlarını izleyen herhangi bir kişi, kolayca projeyi çalıştırabilir ve anlayabilir.
