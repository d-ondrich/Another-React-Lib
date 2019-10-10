Components
----------

**src/AlertWrapper/AlertWrapper.js**

### 1. AlertWrapper




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
alertMsg||no|&lt;See the source code&gt;|
typeAlert||no|&lt;See the source code&gt;|
-----
**src/Avatar/Avatar.js**

### 1. Avatar

Render a rounded user avatar
E.g.:
```html
<Avatar src='https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png' />
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
alt|string|no|&lt;See the source code&gt;|
src|string|no|defaultAvatar|
-----
**src/Button/Button.js**

### 1. Button




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
buttonColor|string|no|&lt;See the source code&gt;|
disabled|bool|no|false|
text|string|no|&lt;See the source code&gt;|
size|enum|no|&lt;See the source code&gt;|
styles|object|no|&lt;See the source code&gt;|
handleClick|func|no|&lt;See the source code&gt;|
-----
**src/Card/Card.js**

### 1. Card




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
header|shape|no||
subheader|shape|no||
date|shape|no||
showDate|bool|no|false|
showTags|bool|no|false|
tags|arrayOf|no||
onClick|func|no|&lt;See the source code&gt;|
backgroundImage|string|no||
borderColor|string|no||
borderWidth|string|no||
borderRadius|string|no||
-----
**src/Checkbox/Checkbox.js**

### 1. Checkbox




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
title|string|no|&lt;See the source code&gt;|
options|array|no|&lt;See the source code&gt;|
onItemClick|func|no|&lt;See the source code&gt;|
-----
**src/CircularProgressBar/CircularProgressBar.js**

### 1. CircularProgressBar




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
progress|number|no|20|
containerStyle|any|no|&lt;See the source code&gt;|
fillColor|string|no|&lt;See the source code&gt;|
containerClassName|string|no|&lt;See the source code&gt;|
width|number|no|200|
strokeWidth|number|no|5|
-----
**src/Collapse/Collapse.js**

### 1. Collapse




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
headerStyle|shape|no|&lt;See the source code&gt;|
collapseHeader|any|no||
collapseBody|any|no||
bodyStyle|shape|no|&lt;See the source code&gt;|
text|string|no|&lt;See the source code&gt;|
styles|object|no|&lt;See the source code&gt;|
handleClick|func|no|&lt;See the source code&gt;|
-----
**src/CountDown/CountDown.js**

### 1. CountDown




-----
**src/Datepicker/Datepicker.js**

### 1. Datepicker




-----
**src/DeleteButton/DeleteButton.js**

### 1. DeleteButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
buttonColor|string|no|&lt;See the source code&gt;|
text|string|no|&lt;See the source code&gt;|
size|enum|no|&lt;See the source code&gt;|
styles|object|no|&lt;See the source code&gt;|
handleClick|func|no|&lt;See the source code&gt;|
-----
**src/Dropdown/Dropdown.js**

### 1. Dropdown




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
btnText|string|no|&lt;See the source code&gt;|
menuItems|array|no|&lt;See the source code&gt;|
onItemClick|func|no|&lt;See the source code&gt;|
-----
**src/DynamicFooter/DynamicFooter.js**

### 1. 




-----
**src/EmailButton/EmailButton.js**

### 1. EmailButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
mailto|string|no||
subject|string|no||
body|string|no||
size|string|no||
-----
**src/ExtendedText/ExtendedText.js**

### 1. ExtendedText

Extended text
Render a certain amount of text with read more link to display the rest
E.g.:
```html
<ExtendedText characterAmount={10} text='my text' />
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
text||no|&lt;See the source code&gt;|
characterAmount||no|10|
styles||no|&lt;See the source code&gt;|
-----
**src/ExtraOptions/ExtraOptions.js**

### 1. ExtraOptions




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
options|array|no|&lt;See the source code&gt;|
-----
**src/Favourite/Favourite.js**

### 1. Favourite




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
dimensions|number|yes||
-----
**src/Favourite/Star.js**

### 1. Star




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
onClick|func|yes||
fill|string|yes||
dimensions|number|yes||
-----
**src/FlatButton/FlatButton.js**

### 1. FlatButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
buttonColor|string|no|&lt;See the source code&gt;|
text|string|no|&lt;See the source code&gt;|
size|enum|no|&lt;See the source code&gt;|
styles|object|no|&lt;See the source code&gt;|
handleClick|func|no|&lt;See the source code&gt;|
-----
**src/Form/Form.js**

### 1. Form




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
fields|array|yes||
-----
**src/GhostButton/GhostButton.js**

### 1. GhostButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
buttonColor|string|no|&lt;See the source code&gt;|
text|string|no|&lt;See the source code&gt;|
size|string|no|&lt;See the source code&gt;|
styles|object|no|&lt;See the source code&gt;|
handleClick|func|no|&lt;See the source code&gt;|
-----
**src/Header/Header.js**

### 1. Header




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
brandName|string|no|&lt;See the source code&gt;|
theme|string|no|&lt;See the source code&gt;|
-----
**src/Heading/Heading.js**

### 1. Heading




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
type|enum|no|&lt;See the source code&gt;|
children|custom|no||
classes|array|no|&lt;See the source code&gt;|
-----
**src/Link/Link.js**

### 1. Link

Simple Link
Renders a link
E.g.:
```html
<Link href='#' text='my link text' />
```   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
href|string|no|&lt;See the source code&gt;|
text|string|no|&lt;See the source code&gt;|
-----
**src/List/List.js**

### 1. List

Simple List Component
To render
listItems array should be an array of objects and content is required in that.
E.g:
<List style={} height={} width={} listItems={[{content: "Item1", height: 100, background: '#345995', style={}}, 
        {content: "Item2", height: 100, background: '#03CEA4', style={}}, 
        {content: "Item3", height: 100, background: '#FB4D3D', style={}}]} >
    </List>   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
listItems|array|no|&lt;See the source code&gt;|
styles|object|no||
height|number|no|500|
width|number|no|250|
-----
**src/LoadingButton.js**

### 1. LoadingButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|custom|no||
disabled|bool|no|false|
loading|bool|no|false|
type|string|no|&lt;See the source code&gt;|
-----
**src/Login/Login.js**

### 1. Login




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
emailLabel|string|no|&lt;See the source code&gt;|
emailErrorMessage|string|no|&lt;See the source code&gt;|
emailHasError|bool|no|false|
emailInputClassName|string|no|&lt;See the source code&gt;|
headerTitle|string|no||
passwordLabel|string|no|&lt;See the source code&gt;|
passwordErrorMessage|string|no|&lt;See the source code&gt;|
passwordHasError|bool|no|false|
passwordInputClassName|string|no|&lt;See the source code&gt;|
onSubmit|func|yes||
submitDisabled|bool|no||
validateEmail|func|no|&lt;See the source code&gt;|
validatePassword|func|no|&lt;See the source code&gt;|
-----
**src/Navbar/NavBrand/index.js**

### 1. NavBrand




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
styles||no|&lt;See the source code&gt;|
handleClick||no|&lt;See the source code&gt;|
-----
**src/Navbar/NavItem/index.js**

### 1. NavItem




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
text||no|&lt;See the source code&gt;|
styles||no|&lt;See the source code&gt;|
handleClick||no|&lt;See the source code&gt;|
-----
**src/Navbar/NavItems/index.js**

### 1. NavItems




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
styles||no|&lt;See the source code&gt;|
handleClick||no|&lt;See the source code&gt;|
-----
**src/Navbar/NavLink/index.js**

### 1. NavLink




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
text||no|&lt;See the source code&gt;|
styles||no|&lt;See the source code&gt;|
handleClick||no|&lt;See the source code&gt;|
-----
**src/Navbar/Navbar.js**

### 1. Navbar




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
theme||no|&lt;See the source code&gt;|
styles||no|&lt;See the source code&gt;|
handleClick||no|&lt;See the source code&gt;|
-----
**src/Notification/Notification.js**

### 1. Notification




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
color|enum|no||
number|number|no|0|
-----
**src/Profile/Profile.js**

### 1. Profile




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
name|string|no||
image|custom|no||
bio|string|no||
className|string|no||
link|string|no||
socials|array|no||
-----
**src/ProgressBar/ProgressBar.js**

### 1. ProgressBar




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
progress|number|no|2|
containerStyle|any|no|&lt;See the source code&gt;|
fillColor|string|no|&lt;See the source code&gt;|
containerClassName|string|no|&lt;See the source code&gt;|
-----
**src/RadioButton/radio.js**

### 1. Radio




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|any|no||
### 2. RadioGroup




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|custom|no||
name|string|no||
selectedValue|any|no||
onChange|func|no||
-----
**src/Range/Range.js**

### 1. Range




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|number|no|0|
min|number|no|0|
max|number|no|100|
step|number|no|1|
onChange|func|no||
dotColor|string|no|&lt;See the source code&gt;|
-----
**src/Reaction/Reaction.js**

### 1. Reaction




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
type|enum|no||
action|custom|no||
-----
**src/SearchBar/Searchbar.js**

### 1. Searchbar




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
onChange|func|no|&lt;See the source code&gt;|
onSubmit|func|no|&lt;See the source code&gt;|
value|string|no|&lt;See the source code&gt;|
-----
**src/SimpleDropdown/SimpleDropdown.js**

### 1. SimpleDropdown




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
options||no|&lt;See the source code&gt;|
handleOnChange||no|&lt;See the source code&gt;|
-----
**src/SimpleRedButton/SimpleRedButton.js**

### 1. SimpleRedButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
text|string|no|&lt;See the source code&gt;|
handleClick|func|no|&lt;See the source code&gt;|
-----
**src/SocialIcon/SocialIcon.js**

### 1. SocialIcon




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
name|string|no||
size|enum|no||
link|string|yes||
-----
**src/Spinner/Spinner.js**

### 1. Spinner




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
size|number|no|20|
color|string|no|&lt;See the source code&gt;|
background|string|no|&lt;See the source code&gt;|
speed|number|no|2|
thick||no|5|
-----
**src/StickyButton/StickyButton.js**

### 1. StickyButton




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
buttonColor||no|&lt;See the source code&gt;|
text||no|&lt;See the source code&gt;|
size||no|&lt;See the source code&gt;|
styles||no|&lt;See the source code&gt;|
handleClick||no|&lt;See the source code&gt;|
-----
**src/Switch/Switch.js**

### 1. Switch




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
value|string|no|undefined|
checked|bool|yes||
onClick|func|yes||
-----
**src/Table/Table.js**

### 1. 




-----
**src/Tabs/Tab.js**

### 1. Tab




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
tab|any|no||
-----
**src/Tabs/Tabs.js**

### 1. Tabs




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|custom|no|&lt;See the source code&gt;|
defaultTab|number|no|0|
-----
**src/TwitterShareButton/twitterShare.js**

### 1. TwitterShare




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
message|string|no||
size|string|no||
-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
