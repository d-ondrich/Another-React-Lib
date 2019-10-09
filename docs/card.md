## Usage

```
import React from 'react';
import { Card } from "another-react-lib"

function App() {

const header = {
  fontColor: 'red',
  fontSize: '19px',
  fontFamily: 'Times New Roman',
   title: 'This is a title'
}

const subheader = {
  fontColor: 'black',
  fontSize: '14px',
  fontFamily: 'Times New Roman',
  title: 'This is a subtitle'
}

const date = {
  fontColor: 'black',
  fontSize: '8px',
  fontFamily: 'Times New Roman',
  text: '19/07/1995'
}

const backgroundImage = 'https://images.app.goo.gl/h3UvQ37FCkii57529'

const tags = [
  {
    name: 'Ben'
  }

]

  return (
    <Card
      header={header}
      subheader={subheader}
      date={date}
      tags={tags}
      showTags={true}
      showDate={true}
      backgroundImage={backgroundImage}
      borderColor={'green'}
      borderWidth={'1px'}
      borderRadius={'1px'}
      onClick={() => {}}
    />
  );
}

export default App;
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`header`|object|no|empty object| Header properties of the card
`subheader`|object|no|empty object| SubHeader properties of the card
`date`|object|no|empty object| Date properties of the card
`tags`|array|no|empty array| Tags for the cards
`showTags`|bool|yes|false| showTags property for the card tags
`showDate`|bool|yes|false| showDate property for the card date
`backgroundImage`|string|no|empty string| backgroundImage
`borderColor`|string|no|empty string| borderColor
`borderWidth`|string|no|empty string| borderWidth
`borderRadius`|string|no|empty string| borderRadius
`onClick`|function|no|() => {}| Function to call
