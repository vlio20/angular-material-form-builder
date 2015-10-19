Angular Material Form Builder!
===================


This module enables you to easily build forms, just the way you do it in Google forms.  
The Module has two directives, one to create the form and the second to preview it:
![example1](http://i.imgur.com/i4e6KWQ.png)

----------


Supported For Items
-------------

Here is the list of form items which are supported by the module:

 1. Checkboxes (Group)
 2. Radio Button (Group)
 3. Plain input (Text, Number)
 4. Textarea
 5. Matrix

Installation
-------------
You can get the module through [bower](http://bower.io/) package manager, just run the following command in your project:  
`bower install angular-material-form-builder --save`

Add the following styles and scripts to your `index.html`:  

    <link rel="stylesheet" href="angular-material-form-builder/dist/styles/app.css">
    <script src="angular-material-form-builder/dist/scripts/app.js"></script>

If you are using [wiredep](https://github.com/taptapship/wiredep)  then just run in order to inject the module dependencies.

Use
-------------
In the form building step you need to use the `form-item` directive. Here is an example:  

    <form-item type="multipleChoices" item="vm.item"></form-item>  
This will produce the following form item:  
![example2](http://i.imgur.com/6jOnwmu.png)
**Note:** the *item* attribute should receive an object `{}` and the *type* attribute should receive one of the following: checkboxes, multipleChoices, input, textarea and matrix.

In order to preview the form you will need to use the `form-view` directive:  

    <form-view form="main.form"></form-view>
**Note:** the *form* attribute should receive the following object:  

    {
    	formItems: [{...}, {...}, ..., {...}]
    }
Each object in the `formItems` array should be the product of the `form-item` provided *item* object. 
