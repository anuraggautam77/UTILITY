var UTILITY = UTILITY || {};
UTILITY = ( function () {
  /**
   *
   * @param {type} obj
   * @param {type} keystr
   * @returns {Boolean}
   *
   */
  var iskeyExist = function ( obj, keystr, getValueFlag ) {
    var keylng = keystr.length,
      arrSplitkey = null,
      flag = false,
      finalValue = null;

    if ( typeof obj === 'object' && keylng !== 1 ) {
      arrSplitkey = keystr.split( '.' );
      if ( arrSplitkey.length > 1 ) {
        var objdata = obj;
        arrSplitkey.forEach( function ( key ) {
          if ( isKeyPresent( objdata, key ) ) {
            finalValue = objdata[ key ];
            objdata = objdata[ key ];
            flag = true;
          } else {
            finalValue = null;
            flag = false;
          }
        } );
      } else {
        flag = isKeyPresent( obj, arrSplitkey );
        if ( flag ) {
          finalValue = obj[ arrSplitkey ];
        }
      }
    }

    return getValueFlag ? finalValue : flag;
  };
  /**
   *
   * @param {type} obj
   * @param {type} strKey
   * @returns {Boolean|index UTILITY.iskeyExist.objdata|type|index UTILITY.iskeyExist.obj}
   */
  var getkeyValue = function ( obj, strKey ) {
    return iskeyExist( obj, strKey, true );

  };
  /**
   *
   * @param {type} obj
   * @param {type} strSortedBy
   * @param {type} isNumericSort
   * @param {type} reverse
   * @returns {unresolved}
   */
  var sortByKey = function ( obj, strSortedBy, isNumericSort, reverse ) {

    var arrSplitkey = strSortedBy.split( '.' );
    var strSortedBy = strSortedBy || 1;
    var isNumericSort = isNumericSort || false;
    var reverse = reverse || false;

    var reversed = ( reverse ) ? -1 : 1;
    if ( arrSplitkey.length > 1 ) {
      if ( isNumericSort ) {
        obj.sort( function ( a, b ) {
          var a = a,
            b = b;
          arrSplitkey.forEach( function ( key, i ) {
            a = a[ key ];
            b = b[ key ];
          } );

          return reversed * ( a - b );
        } );
      } else {
        obj.sort( function ( a, b ) {
          var a = a,
            b = b;
          arrSplitkey.forEach( function ( key, i ) {
            a = a[ key ];
            b = b[ key ];
          } );
          var x = a.toLowerCase(),
            y = b.toLowerCase();

          return x < y ? reversed * -1 : x > y ? reversed : 0;
        } );
      }
    } else {
      if ( isNumericSort ) {
        obj.sort( function ( a, b ) {
          return reversed * ( a[ strSortedBy ] - b[ strSortedBy ] );
        } );
      } else {
        obj.sort( function ( a, b ) {
          var x = a[ strSortedBy ].toLowerCase(),
            y = b[ strSortedBy ].toLowerCase();

          return x < y ? reversed * -1 : x > y ? reversed : 0;
        } );
      }
    }

    return obj;
  };
  /**
   *
   * @param {type} obj
   * @param {type} key
   * @returns {Boolean}
   */


  var isKeyPresent = function ( obj, key ) {
    var tempFlag = false;
    if ( obj !== null && obj.hasOwnProperty( key ) ) {
      tempFlag = true;
    }

    return tempFlag;
  };

  return {
    iskeyExist: iskeyExist,
    /**
     *  @obj : Nested Object
     *   @keyname : In case of first level Search  only single key in str>>>>>'keyName'
     *               In case of second Level SEARCH '{{keyNameofFirstLevel.keyNameofSecondLevel}}'
     *               and so on {{keyNameofFirstLevel.keyNameofSecondLevel.nthlevelkey}}
     *    UTILITY.iskeyExsit(obj,'keyname');
     */


    getkeyValue: getkeyValue,
    /**
     * @obj : Nested Object
     * @keyname : In case of first level Search  only single key in str>>>>>'keyName'
     *              In case of second Level SEARCH '{{keyNameofFirstLevel.keyNameofSecondLevel}}'
     *               and so on {{keyNameofFirstLevel.keyNameofSecondLevel.nthlevelkey}}
     * UTILITY.getkeyValue(obj,'keyname');
     */



    sortByKey: sortByKey
    /**
     * @arrayofObjects : Nested Object
     * @keyname : In case of first level Search  only single key in str>>>>>'keyName'
     *              In case of second Level SEARCH '{{keyNameofFirstLevel.keyNameofSecondLevel}}'
     *               and so on {{keyNameofFirstLevel.keyNameofSecondLevel.nthlevelkey}}
     * @isNumericSort: In case of numeric sort ,isNumericSort should be <<true>>;
     *                 In case of String sort ,isNumericSort should be <<false>>;
     * @reverse : in case DSEC reverse should be <<true>> and else <<false>>

     * UTILITY.sortByKey(<<arrayofObjects>>, keyname, isNumericSort, reverse);
     */
  };
} )();
