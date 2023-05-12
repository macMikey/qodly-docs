---
id: boolean
title: Boolean
---

## Boolean Commands


## bool

<!-- REF #_command_.bool.Syntax -->**bool** ( *expression* : expression ) : boolean<!-- END REF -->


<!-- REF #_command_.bool.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|expression|expression|->|Expression for which to return the boolean form|
|Result|boolean|<-|Boolean form of the expression|<!-- END REF -->

#### Description

The `bool` command <!-- REF #_command_.bool.Summary -->returns the boolean form of the expression you passed in *expression*<!-- END REF -->.

The command can return the following values, depending on the *expression* result type:

|Expression result type|Return of the bool command|
|:----|:----|
|undefined|false|
|null|false|
|boolean|false if false, otherwise true|
|number|false if 0, other true|
|other types|false|

This command is useful when the code expects a boolean value, and when the evaluation of the expression could result in a different type (e.g. if it evaluates to **null** or **undefined**).

#### See also

[`date`](../dateandtime#date)<br/>
[`num`](../string#num)<br/>
[`string`](../string#string)<br/>
[`time`](../dateandtime#time)

## false

<!-- REF #_command_.false.Syntax -->**false** : boolean<!-- END REF -->


<!-- REF #_command_.false.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|false|<!-- END REF -->

#### Description

`false` <!-- REF #_command_.false.Summary -->returns the boolean value false<!-- END REF -->.

#### Example

The following example sets the variable *vbOptions* to false:

```4d
 var vbOptions : boolean
 vbOptions=false
```

#### See also

[`not`](#not)<br/>
[`true`](#true)

## not

<!-- REF #_command_.not.Syntax -->**not** : boolean<!-- END REF -->


<!-- REF #_command_.not.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|aBoolean|boolean|->|Boolean value to negate|
|Result|boolean|<-|Opposite of aBoolean|<!-- END REF -->

#### Description

The `not` function <!-- REF #_command_.true.Summary -->returns the negation of *aBoolean*, changing true to false or false to true<!-- END REF -->.

#### Example

This example first assigns **true** to a variable, then changes the variable value to **false**, and then back to **true**.

```4d
 var vResult : boolean
 vResult=true // vResult is set to true
 vResult=not(vResult) // vResult is set to false
 vResult=not(vResult) // vResult is set to true
```

#### See also

[`false`](#false)<br/>
[`true`](#true)

## true

<!-- REF #_command_.true.Syntax -->**true** : boolean<!-- END REF -->


<!-- REF #_command_.true.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|boolean|<-|true|<!-- END REF -->

#### Description

`true` <!-- REF #_command_.true.Summary -->returns the boolean value true<!-- END REF -->.

#### Example

The following example sets the variable *vbOptions* to true:

```4d
 var vbOptions : boolean
 vbOptions=true
```

#### See also

[`false`](#false)<br/>
[`not`](#not)