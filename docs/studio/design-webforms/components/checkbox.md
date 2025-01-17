---
id: checkbox
title: Checkbox
---
import Column from '@site/src/components/Column'

The **Checkbox** component is a UI element designed for binary selections. It consists of a small box that can be checked (selected) or unchecked (deselected) by the user. 


:::info 

The **Checkbox** component contains an embedded **Checkbox Input** and a **Label** element. This is of great importance as configuring the **Checkbox** component may require adjusting properties within the embedded elements. This applies to the visual style, triggers, and actions as they may differ.

:::


## Use Cases

The **Checkbox** component serve various purposes in user interfaces, including:

- **Feature Control**: Enable/disable features.

- **Preference Indication**: Reflect user preferences.

- **Agree/Disagree Choices**: Obtain user consent.




## Properties Customization

### Checkbox Component

Enhance the **Checkbox** component to align with your application's requirements using the following customization options:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Label Position</span>: Developers can tailor the label's position, placing it above, below, to the left, to the right, or even hidden.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/textInput_LabelPosition.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


- **Variant Selection**: Choose the variant that aligns with your design:
    
    - <Column.List align="center" justifyContent="between">
        <Column.Item width="60%">
            <li><span style={{fontWeight: 'bold'}}>Checkbox Variant</span>: Select this for the standard checkbox style. </li>
            <br/>
            <li><span style={{fontWeight: 'bold'}}>Switch Variant</span>: Choose this for a switch-like appearance. </li>
        </Column.Item>
        <Column.Item width="35%">
            <img alt="explorer" src={require('./img/checkbox_VariantSelection.png').default} style={{borderRadius: '6px'}} />
        </Column.Item>
    </Column.List>

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Size</span>: Choose from small, medium, or large sizes for the Checkbox component.
	</Column.Item>
	<Column.Item width="34%">
        <img alt="explorer" src={require('./img/checkbox_Size.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>


### Embedded Label

Within the **Checkbox** component, an embedded **Label** allows for further customization of the following properties:

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <span style={{fontWeight: 'bold'}}>Label</span>: Personalize the label to offer clear instructions or guidance.
	</Column.Item>
	<Column.Item width="35%">
        <img alt="explorer" src={require('./img/textInput_label.png').default} style={{borderRadius: '6px'}} />
	</Column.Item>
</Column.List>



## Data Integration

The **Checkbox** component allows for seamless integration of datasources, enabling dynamic data binding and interaction within the webform.

### Data Binding
To associate data with the Checkbox component, follow these steps:

- **Navigate to the Properties Panel**: Access the Data Access category located within the Properties panel for the Checkbox component.

- <Column.List align="center" justifyContent="between">
	<Column.Item width="60%">
        <li><span style={{fontWeight: 'bold'}}>Define the Datasource</span>: Specify the relevant Datasource that will capture the user's selected choice.</li>
	</Column.Item>
	<Column.Item width="35%">
	</Column.Item>
</Column.List>

### Server-Side Interaction

Interacting with user input data is straightforward. When you bind a datasource to the **Checkbox** component, you can access and make use of the input content.

Subsequently, you can utilize this input value in various ways, such as within a standard action to initiate a search with matching attribute values.


## Triggers and Events

### Checkbox Component

The **Checkbox** component can respond to various events, enabling dynamic user experiences. Events that can trigger actions within the component include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the component. |
|On Blur| Calls for an action when the component loses focus (user clicks outside). |
|On Focus| Calls for an action when the component gains focus (user clicks on it). |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the component.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the component.|

### Embedded Label

The embedded **Label** can also respond to various events, allowing for dynamic user experiences. Events that can trigger actions within the embedded icon include:

|Event|Description|
|---|---|
|On Click| Calls for an action when the user clicks on the Label. |
|On Keyup| Calls for an action when a keyboard key is released while the Label is in focus|
|On KeyDown| Calls for an action when a keyboard key is pressed down while the Label is in focus. |
|On MouseEnter| Calls for an action when the user's mouse cursor enters the area of the Label.|
|On MouseLeave| Calls for an action when the user's mouse cursor exits the area of the Label.|
