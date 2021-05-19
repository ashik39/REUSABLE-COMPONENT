# REUSABLE-COMPONENT

## Description

Reusable components are created to use anywhere in the project.

Components created:

- Text Field
- Number Field
- Select Field
- RadioButton Field
- ModalPopup

---

## Installation

- Run these commands in the terminal:
- git clone https://github.com/ashik39/REUSABLE-COMPONENT.git
- cd Project_Reusable_Component/re_usable_component
- npm install
- npm start
- The app should open automatically in your browser usually at
- http://localhost:3000/

---

## Usage

The reusable components are craeted inside 'components' folder.

### TextField

Pass the following as attributes in TextField component:

- label="" : Label for field as string
- name="" : Name of field as string
- placeholder="": Placeholder of field as string
- value={} : Pass state value for field
- setvalue={} : Pass the setState to assign a state value
- register={} : Pass validations using register from react-hook-form if required
- errors={} : Pass errors state from react-hook-form with given name of field (example : errors={errors.text} )

### NumberField

Pass the following as attributes in NumberField component:

- label="" : Label for field as string
- name="" : Name of field as string
- placeholder="": Placeholder of field as string
- value={} : Pass state value for field
- setvalue={} : Pass the setState to assign a state value
- register={} : Pass validations using register from react-hook-form if required
- errors={} : Pass errors state from react-hook-form with given name of field (example : errors={errors.number} )

### SelectField

Pass the following as attributes in SelectField component:

- label="" : Label for field as string
- name="" : Name of field as string
- data={}: Pass array of data to show in options
- value={} : Pass state value for field
- setvalue={} : Pass the setState to assign a state value
- register={} : Pass validations using register from react-hook-form if required
- errors={} : Pass errors state from react-hook-form with given name of field (example : errors={errors.select )

### RadioButtonField

Pass the following as attributes in RadioButtonField component:

- label="" : Label for field as string
- name="" : Name of field as string
- data={}: Pass array of data to show as radio button options
- setvalue={} : Pass the setState to assign a state value
- register={} : Pass validations using register from react-hook-form if required
- errors={} : Pass errors state from react-hook-form with given name of field (example : errors={errors.radio} )

### ModalPopupField

Add the elements required for project inside the ModalPopup component. Added elements will be displayed as modalpopup wherever used.
