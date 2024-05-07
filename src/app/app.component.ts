import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

// Components: Angular tarafında görünüm ve işlev bakımından birer küçük parçacıklardır.
@Component({
  selector: 'app-root', // <app-root></app-root>

  /* Angular tamamen modüler bir yapıya sahip.
     Angular 17 ve öncesinde varsayılan olarak component'ler modüllere bağlı olarak geliyordu.
     Dolayısıyla modülün import edip sağladığı işlevleri sadece kullanabiliyorlardu. */
  // standalone: Angular 17 ve sonrası için varsayılan hale geldi.
  // Her component'in kendi import'ı olabilir.
  // Böylece her component kendi başına Angulara dahil olabilir.
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  // Import'larda bu componentte kullanmak adına Angular modüllerini sağlamış oluyoruz.

  templateUrl: './app.component.html', // HTML dosyası yolunu
  styleUrl: './app.component.scss', // Stil dosya yolunu
})
export class AppComponent {
  // Component'in class'ıyla dinamik yapıyı, temel işlev ve kararları yapabiliriz.
  readonly title: string = 'Northwind'; // State: Component'in sakladığı veri ve izlediği veri yapısı
  counter: number = 0;

  onButtonClick() {
    this.counter += 1; // State'i güncelleyen fonksiyon
    console.log('Button Clicked');
  }
}
