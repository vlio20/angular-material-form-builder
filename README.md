# Angular Material Form Builder!

Add support for angular 1.8.2

This module enables you to easily build forms, just the way you do it in Google forms.  
The Module has two directives, one to create the form and the second to preview it:
![example1](http://i.imgur.com/i4e6KWQ.png)

---

## DEMO

Run `npm run start:demo`

## Supported Form Items

Here is the list of form items which are supported by the module:

1.  Checkboxes (Group)
2.  Radio Button (Group)
3.  Plain input (Text, Number)
4.  Textarea
5.  Matrix
6.  Select
7.  Agreement Item
8.  Label Item

## Installation

`npm install git+https://github.com/xcally/angular-material-form-builder.git#v1.0.0`

Add the following styles and scripts to your `index.html`:

    <link rel="stylesheet" href="angular-material-form-builder/dist/styles/app.css">
    <script src="angular-material-form-builder/dist/scripts/app.js"></script>

If you are using [wiredep](https://github.com/taptapship/wiredep) then just run in order to inject the module dependencies.

## Use

In the form building step you need to use the `form-item` directive. Here is an example:

    <form-item type="multipleChoices" item="vm.item"></form-item>

This will produce the following form item:  
![example2](http://i.imgur.com/6jOnwmu.png)
**Note:** the _item_ attribute should receive an object `{}` and the _type_ attribute should receive one of the following: checkboxes, multipleChoices, input, textarea and matrix.

In order to preview the form you will need to use the `form-view` directive:

    <form-view form="main.form"></form-view>

**Note:** the _form_ attribute should receive the following object:

    {
    	items: [{...}, {...}, ..., {...}]
    }

Each object in the `items` array should be the product of the `form-item` provided _item_ object.

## Also - Use

You can also use `form-items-container` directive. This directives adds the option to handle movement and deletion of items in the list. You just need to pass it the form and it will make the rest for you. Here is a code example:

```
<form-items-container form="main.form"></form-items-container>
```

_Action Attributes:_
there are also the following attributes: `on-delete`, `on-up`, `on-down`, if provided then the action will appear at the top right left corner of the item. This attribute expects callback function which will be executed after clicking on the action. If you will provide the index of the item (like in the example below) you will also receive it in your callback.
Here is HTML example:

```
<form-item ng-repeat="item in main.form.items track by $index"
             type="{{item.type}}"
             item="item"
             index="$index"
             on-delete="main.delete(item, index)"
             on-up="main.up(item, index)"
             on-down="main.down(item, index)">

        </form-item>
```

JS example:

```
  MainController.prototype.delete = function(item, index) {
    vm.form.items.splice(index, 1);
  };

  MainController.prototype.up = function(item, index) {
    if(index !== 0) {
      var prevItem = vm.form.items[index - 1];
      vm.form.items[index] = prevItem;
      vm.form.items[index - 1] = item;
    }
  };

  MainController.prototype.down = function(item, index) {
    if(index !== vm.form.items.length + 1) {
      var nextItem = vm.form.items[index + 1];
      vm.form.items[index] = nextItem;
      vm.form.items[index + 1] = item;
    }
  };
```

## Contribution

1. Fork the repo, run `npm install` then `bower install` and then `gulp server` in order to run the server locally. When ready run `gulp build` commit your changes and make a pull request.
2. Report bugs and suggest enhancements.
