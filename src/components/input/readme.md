# Input

```html preview
<sh-input type="text" placeholder="Small" size="small"></sh-input>

<br><br>

<sh-input type="text" placeholder="Medium" size="medium"></sh-input>

<br><br>

<sh-input type="text" placeholder="Large" size="large"></sh-input>

<br><br>

<sh-input type="text" placeholder="Small" size="small">
  <ion-icon name="settings-outline" slot="prefix"></ion-icon>
  <ion-icon name="open-outline" slot="suffix"></ion-icon>
</sh-input>

<br><br>

<sh-input type="text" placeholder="Medium" size="medium">
  <ion-icon name="settings-outline" slot="prefix"></ion-icon>
  <ion-icon name="open-outline" slot="suffix"></ion-icon>
</sh-input>

<br><br>

<sh-input type="text" placeholder="Large" size="large">
  <ion-icon name="settings-outline" slot="prefix"></ion-icon>
  <ion-icon name="open-outline" slot="suffix"></ion-icon>
</sh-input>

<br><br>

<sh-input type="text" placeholder="Addons" size="small">
  <span slot="before">$</span>
  <span slot="after">.00</span>
</sh-input>

<br><br>

<sh-input type="text" placeholder="Addons" size="medium">
  <span slot="before">$</span>
  <span slot="after">.00</span>
</sh-input>

<br><br>

<sh-input type="text" placeholder="Addons" size="large">
  <span slot="before">$</span>
  <span slot="after">.00</span>
</sh-input>

<br><br>

<sh-input type="text" placeholder="Addons and Icons" size="small">
  <span slot="before">$</span>
  <span slot="after">.00</span>
  <ion-icon name="settings-outline" slot="prefix"></ion-icon>
  <ion-icon name="open-outline" slot="suffix"></ion-icon>
</sh-input>

<br><br>

<sh-input type="text" placeholder="Addons and Icons" size="medium">
  <span slot="before">$</span>
  <span slot="after">.00</span>
  <ion-icon name="settings-outline" slot="prefix"></ion-icon>
  <ion-icon name="open-outline" slot="suffix"></ion-icon>
</sh-input>

<br><br>

<sh-input type="text" placeholder="Addons and Icons" size="large">
  <span slot="before">$</span>
  <span slot="after">.00</span>
  <ion-icon name="settings-outline" slot="prefix"></ion-icon>
  <ion-icon name="open-outline" slot="suffix"></ion-icon>
</sh-input>

<br><br>

<sh-input type="text" placeholder="Clearable" size="small" clearable></sh-input>

<br><br>

<sh-input type="text" placeholder="Clearable" size="medium" clearable></sh-input>

<br><br>

<sh-input type="text" placeholder="Clearable" size="large" clearable></sh-input>

<br><br>

<sh-input type="password" placeholder="Password Toggle" size="small" toggle-password></sh-input>

<br><br>

<sh-input type="password" placeholder="Password Toggle" size="medium" toggle-password></sh-input>

<br><br>

<sh-input type="password" placeholder="Password Toggle" size="large" toggle-password></sh-input>

<br><br>

<sh-input type="text" placeholder="Disabled" size="small" disabled></sh-input>

<br><br>

<sh-input type="text" placeholder="Disabled" size="medium" disabled></sh-input>

<br><br>

<sh-input type="text" placeholder="Disabled" size="large" disabled></sh-input>

<br><br>

<sh-input type="number" placeholder="Number"></sh-input>
```


<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                      | Type                                                                                  | Default     |
| ---------------- | ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------- |
| `autocapitalize` | `autocapitalize`  | The input's autocaptialize attribute.                            | `string`                                                                              | `undefined` |
| `autocomplete`   | `autocomplete`    | The input's autocomplete attribute.                              | `string`                                                                              | `undefined` |
| `autocorrect`    | `autocorrect`     | The input's autocorrect attribute.                               | `string`                                                                              | `undefined` |
| `autofocus`      | `autofocus`       | The input's autofocus attribute.                                 | `boolean`                                                                             | `undefined` |
| `clearable`      | `clearable`       | Set to true to add a clear button when the input is populated.   | `boolean`                                                                             | `false`     |
| `disabled`       | `disabled`        | Set to true to disable the input.                                | `boolean`                                                                             | `false`     |
| `inputmode`      | `inputmode`       | The input's inputmode attribute.                                 | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | `undefined` |
| `max`            | `max`             | The input's max attribute.                                       | `number`                                                                              | `undefined` |
| `maxlength`      | `maxlength`       | The input's maxlength attribute.                                 | `number`                                                                              | `undefined` |
| `min`            | `min`             | The input's min attribute.                                       | `number`                                                                              | `undefined` |
| `minlength`      | `minlength`       | The input's minlength attribute.                                 | `number`                                                                              | `undefined` |
| `name`           | `name`            | The input's name attribute.                                      | `string`                                                                              | `''`        |
| `nativeTabindex` | `native-tabindex` | The input's tabindex attribute.                                  | `number`                                                                              | `undefined` |
| `pattern`        | `pattern`         | The input's pattern attribute.                                   | `string`                                                                              | `undefined` |
| `placeholder`    | `placeholder`     | The input's placeholder text.                                    | `string`                                                                              | `undefined` |
| `readonly`       | `readonly`        | Set to true for a readonly input.                                | `boolean`                                                                             | `false`     |
| `required`       | `required`        | The input's required attribute.                                  | `boolean`                                                                             | `undefined` |
| `size`           | `size`            | The input's size, one of `small`, `medium`, or `large`.          | `string`                                                                              | `'medium'`  |
| `step`           | `step`            | The input's step attribute.                                      | `number`                                                                              | `undefined` |
| `togglePassword` | `toggle-password` | Set to true to add a password toggle button for password inputs. | `boolean`                                                                             | `false`     |
| `type`           | `type`            | The input's type, one of `text`, `number`, `email`, etc.         | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"`           | `'text'`    |
| `value`          | `value`           | The input's value attribute.                                     | `string`                                                                              | `''`        |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the input.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the input.

#### Returns

Type: `Promise<void>`




## Slots

| Slot       | Description                                              |
| ---------- | -------------------------------------------------------- |
| `"after"`  | Used to insert an addon after the input.                 |
| `"before"` | Used to insert an addon before the input.                |
| `"prefix"` | Used to prepend an icon or similar element to the input. |
| `"suffix"` | Used to append an icon or similar element to the input.  |


----------------------------------------------

