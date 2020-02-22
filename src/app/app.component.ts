import { Component } from '@angular/core';
import { faLaughBeam } from '@fortawesome/free-solid-svg-icons';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  LaughBeam = faLaughBeam;
  Frown = faFrown;
  public imagePath;
  url: any;
  dragPosition = {x: 0, y: 0};

public displayImage(event: any) {

  if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
              this.url = event.target.result;
          }
          reader.readAsDataURL(event.target.files[0]);
      }
}

}


