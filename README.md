# REUSABLE-COMPONENT

##Description

Reusable components are created to use anywhere in the project.

Components created:
 -Text Field
 -Number Field
 -Select Field
 -RadioButton Field
 -ModalPopup
 
---
 
##Installation

-Run these commands in the terminal:
-git clone https://github.com/ashik39/REUSABLE-COMPONENT.git
-cd Project_Reusable_Component
-npm install
-npm start
-The app should open automatically in your browser usually at 
-http://localhost:3000/

---

##Usage

The reusable components are craeted inside 'components' folder.

###TextField

Pass the following as attributes in TextField component:
  -value : Value of field
  -label : Label for field
  -name : Name of field
  -placeholder: Placeholder of field
  -onChange : Pass the setState to assign a state

###NumberField

Pass the following as attributes in NumberField component:
  -value : Value of field
  -label : Label for field
  -name : Name of field
  -placeholder: Placeholder of field
  -onChange : Pass the setState to assign a state

###SelectField

Pass the following as attributes in SelectField component:
  -value : Value of field
  -label : Label for field
  -data : Pass array of objects as data to show in options of select field
  -onChange : Pass the setState to assign a state

###RadioButtonField

Pass the following as attributes in RadioButtonField component:
  -value : Value of field
  -label : Label for field
  -name : Name of field
  -onChange : Pass the setState to assign a state

###ModalPopupField

Add the elements required for project inside the ModalPopup component. Added elements will be displayed as modalpopup wherever used.
