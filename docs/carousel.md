## Usage

```
import React from 'react';
import {Carousel} from "another-react-lib"

class App extends Component {
  state = {
      images: [
      {
        img: "https://fakeimg.pl/440x320/",
        captionText: "Caption One"
      },
      {
        img: "https://fakeimg.pl/440x320/",
        captionText: "Caption Two"
      },
      {
        img: "https://fakeimg.pl/440x320/",
        captionText: "Caption Three"
      }
    ]
  };


  render() {
    return (
      <div>
        <Carousel images={this.state.images} />

      </div>
    );
  }
}

export default App;
```

### Properties

| Property | Type  | Required | Default value | Description      |
| :------- | :---- | :------- | :------------ | :--------------- |
| `images` | array | yes      | []            | Image to display |
