####UTILITY JS for nested JSON

######  Javascript  Class returning three public accessible function  as
1. iskeyExist
2. getkeyValue
3. sortByKey


###### iskeyExist
  <pre>
	 UTILITY.iskeyExsit(obj,'keyname');
</pre>

  @obj : Nested Object
   @keyname : In case of first level Search  only single key in str keyName
   In case of second Level SEARCH {{keyNameofFirstLevel.keyNameofSecondLevel}}
and so on {{keyNameofFirstLevel.keyNameofSecondLevel.nthlevelkey}}

**return : Boolean value**


###### getkeyValue
  <pre>
	 UTILITY.getkeyValue(obj,'keyname');
</pre>

 @obj : javascript object
 @keyname : In case of first level Search  only single key in str  keyName
    In case of second Level SEARCH  {{keyNameofFirstLevel.keyNameofSecondLevel}}and so on {{keyNameofFirstLevel.keyNameofSecondLevel.nthlevelkey}}

**return : value of key (string , number,array ,object ,null) **

###### sortByKey
  <pre>
	 UTILITY.sortByKey(arrOfObj,'keyname', isNumericSort, reverse);
</pre>

  @arrOfObj : Nested Object
  @keyname :
  							In case of first level Search  only single key in str 'keyName'
   						   In case of second Level SEARCH '{{keyNameofFirstLevel.keyNameofSecondLevel}}'
  and so on {{keyNameofFirstLevel.keyNameofSecondLevel.nthlevelkey}}

   @isNumericSort: In case of numeric sort ,isNumericSort should be **true**
								  In case of String sort ,isNumericSort should be **false**;

  @reverse : in case DSEC reverse should be **true** and else **false**

**return : sorted array of object**
