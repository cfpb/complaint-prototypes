(function(w){
    "use strict";

    // Return an object with keys that reference the functions below
    w.mosaic = {
        "addFieldLevelErrors"                   : addFieldLevelErrors,
        "addInputDateErrorClass"                : addInputDateErrorClass,
        "addParenthesisToSubTitleForListItem" 	: addParenthesisToSubTitleForListItem,
        "addParenthesisToSubTitleForListItems"	: addParenthesisToSubTitleForListItems,
        "convertMapValuesToString"              : convertMapValuesToString,
        "createErrorResponse"                   : createErrorResponse,
        "disableButton"                         : disableButton,
        "formatDate"                            : formatDate,
        "formatDateTime"                        : formatDateTime,
        "formatTime"                            : formatTime,
        "getCommunityName"                      : getCommunityName,
        "getDateRangeErrorMessage"              : getDateRangeErrorMessage,
        "getEmailFormatErrorMessage"            : getEmailFormatErrorMessage,
        "getEmptyInputErrorMessage"             : getEmptyInputErrorMessage,
        "getEmptyCheckboxBlocksErrorMessage"    : getEmptyCheckboxBlocksErrorMessage,
        "getEmptyRadioBlocksErrorMessage"       : getEmptyRadioBlocksErrorMessage,
        "getObjectByField"                      : getObjectByField,
        "getPageName"                           : getPageName,
        "getRecordIdFromUrlHash"                : getRecordIdFromUrlHash,
        "getURLParameterValue"                  : getURLParameterValue,
        "getUsernameFormatErrorMessage"         : getUsernameFormatErrorMessage,
        "hideFieldLevelErrors"                  : hideFieldLevelErrors,
        "navigateToURL"                         : navigateToURL,
        "padLeftWithZero"                       : padLeftWithZero,
        "recordIdFromUrlHashIsValid"            : recordIdFromUrlHashIsValid,
        "removeInputDateErrorClass"             : removeInputDateErrorClass,
        "removeInputTextErrors"                 : removeInputTextErrors,
        "removePicklistErrorClass"              : removePicklistErrorClass,
        "removePicklistErrorClasses"            : removePicklistErrorClasses,
        "setButtonForWaitingState"              : setButtonForWaitingState,
        "setFormLevelErrors"                    : setFormLevelErrors,
        "setStyleToDisplayNone"                 : setStyleToDisplayNone,
        "slideElementDown"                      : slideElementDown,
        "updateCharactersRemaining"             : updateCharactersRemaining,
        "validateInputDateForRange"             : validateInputDateForRange,
        "validateInputDateForEmpty"             : validateInputDateForEmpty,
        "validateInputForChecked"               : validateInputForChecked,
        "validateInputSelectBlocksForEmpty"     : validateInputSelectBlocksForEmpty,
        "validateInputTextForEmail"             : validateInputTextForEmail,
        "validateInputTextForEmpty"             : validateInputTextForEmpty,
        "validatePicklistForEmpty"              : validatePicklistForEmpty,
        "validateQuestionsForEmpty"             : validateQuestionsForEmpty,
        "validateYesNoBlocksForEmpty"           : validateYesNoBlocksForEmpty,
        "valueExistsInArray"                    : valueExistsInArray
    };

    /*-------------------------------------------
    Animation Functions
    -------------------------------------------*/

    /**
 	 * Sets the display attribute of the inline style to 'none'
     * @param {String} elemenetId - Id of the element
     * @author Michael Nation (Deloitte Consulting)
 	 */
    function setStyleToDisplayNone(elementId) {
      console.log('Calling deprecated method mosaic.setStyleToDisplayNone. Update to mosaic2.dom.setStyleToDisplayNone');
      var element = document.getElementById(elementId);
        if (!$A.util.isEmpty(element)) {
        element.style.cssText = "display: none;";
      }
    }

    /**
     * Uses jQuery to visually slide an element down into view.
     * @param {String} elemenetId - Id of the element
     * @param {Integer} delay - optional. in milliseconds.
     * @param {Integer} speed - optional.
     * @author Michael Nation (Deloitte Consulting)
 	 */
    function slideElementDown(elementId, delay, speed) {
        console.log('Calling deprecated method mosaic.slideElementDown. Update to mosaic2.dom.slideElementDown');
        if ($A.util.isEmpty(delay)) {
            delay = 50; //default value
        }

        if ($A.util.isEmpty(speed)) {
            speed = 600; //default value
        }

        var element = document.getElementById(elementId);
        setTimeout(function() {
            $(element).slideDown(speed);
        }, delay);
    }

    /*-------------------------------------------
    Community/URL Functions
    -------------------------------------------*/

    // Returns the current community name in the format:  /<CommunityName>/s/
    function getCommunityName(pathname) {
        console.log('Calling deprecated method mosaic.getCommunityName. Update to use mosaic2.util.getCommunityUrl instead.');
        var communityName = pathname.match( /(\/[\w\-]+\/[\w\-]+\/)/ )[0]; // String.match() returns an array of information, with index 0 being the result
        return communityName;
    }

    // Returns the current page name
    function getPageName(pathname) {
        console.log('Calling deprecated method mosaic.getPageName. Update to use mosaic2.util.getPageName instead.');
        var communityName = getCommunityName(pathname);
        var pageName = pathname.replace(communityName, "");
        return pageName;
    }

    /**
     * Returns the value of a query string parameter from the URL.
     * If the parameter doesn't exist, null is returned.
     * If the parameter doesn't have a value, an empty string is returned.
     * @param {string} parameterName
     * @author Michael Nation (Deloitte Consulting)
     */
    function getURLParameterValue(parameterName) {
      console.log('Calling deprecated method mosaic.getURLParameterValue. Update to use mosaic2.util.getURLParameterValue instead.');
    	var url = window.location.href;

        parameterName = parameterName.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + parameterName + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';

        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    /**
     * Navigates to a new page with the given URL using Aura's global event.
     * @param {string} url
     * @author Michael Nation (Deloitte Consulting)
     */
    function navigateToURL(url) {
        console.log('Calling deprecated method mosaic.navigateToURL. Update to use mosaic2.util.navigateToPath instead.');
        var communityUrl = mosaic2.util.getCommunityUrl();
        communityUrl = communityUrl.substring(0, communityUrl.length - 1);
        w.location.href = communityUrl + url;
    }

    /**
 	 * Checks if the recordId from the URL has a valid format
 	 * @returns {Boolean}
     * @author Michael Nation (Deloitte Consulting)
 	 */
    function recordIdFromUrlHashIsValid() {
        console.log('Calling deprecated method mosaic.recordIdFromUrlHashIsValid. Update to use mosaic2.util.recordIdFromUrlHashIsValid instead.');
        var isValid = false;

        var recordId = getRecordIdFromUrlHash();
        if (recordId.length === 15 || recordId.length === 18) { //Ensure recordId has a valid length
            isValid = true;
        }

        return isValid;
    }

    /**
     * Retrieves the recordId from the URL hash
     * and returns just the recordId, ommitting the hash value and query string parameters if they exist
     * @returns {String}
     * @author Michael Nation (Deloitte Consulting)
     */
    function getRecordIdFromUrlHash() {
        console.log('Calling deprecated method mosaic.getRecordIdFromUrlHash. Update to use mosaic2.util.getRecordIdFromUrlHash instead.');
        var recordIdWithHash = window.location.hash;
        var recordId = recordIdWithHash.replace("#", ""); //removes hash character from string

        return recordId;
    }

    /*-------------------------------------------
	  Date/DateTime Functions
    -------------------------------------------*/

    // 2016-07-28 -> 07/28/2016
    function formatDate(date) {
        console.log('Calling deprecated method mosaic.formatDate. Update to use aura ui:outputDateTime component instead.');
        var formattedDate = date.split("-");
        formattedDate.push(formattedDate.shift());
        return formattedDate.join("/");
    }

    // 2016-08-24T15:48:39.000+0000 -> 08/24/2016 11:48 ET
    function formatDateTime(dateTime) {
        console.log('Calling deprecated method mosaic.formatDateTime. Update to use aura ui:outputDateTime component instead.');
        var GMT_TO_EST_OFFSET_HOURS = -5.0;
        var HOUR_IN_MILLISECONDS = 3600000;
        //var MINUTE_IN_MILLISECONDS = 60000;


        // Had to split and feed in each piece of the date and time individually for IE support
        var inputDateTime = dateTime.split("T");

        var inputDate = inputDateTime[0].split("-");
        var inputYear = parseInt(inputDate[0]);
        var inputMonth = parseInt(inputDate[1]);
        var inputDay = parseInt(inputDate[2]);

        var inputTime = inputDateTime[1].split(":");
        var inputHour = parseInt(inputTime[0]);
        var inputMinute = parseInt(inputTime[1]);
        var inputSecond = parseInt(inputTime[2]);


        //var gmtDateTimeObject = new Date(dateTime);
        var gmtDateTimeObject = new Date(inputYear, inputMonth - 1, inputDay, inputHour, inputMinute, inputSecond);
        var utcDateTimeInMilliseconds = gmtDateTimeObject.getTime() /*+ (gmtDateTimeObject.getTimezoneOffset() * MINUTE_IN_MILLISECONDS)*/;
        var estDateTimeObject = new Date(utcDateTimeInMilliseconds + (HOUR_IN_MILLISECONDS * GMT_TO_EST_OFFSET_HOURS));

        var month = padLeftWithZero(estDateTimeObject.getMonth() + 1);
        var day = padLeftWithZero(estDateTimeObject.getDate());
        var year = estDateTimeObject.getFullYear();

        var hours = padLeftWithZero(estDateTimeObject.getHours());
        var minutes = padLeftWithZero(estDateTimeObject.getMinutes());

        return month + "/" + day + "/" + year + " " + hours + ":" + minutes + " ET";
    }

    // 16:43:02.000+0000 -> 16:43
    function formatTime(time) {
        console.log('Calling deprecated method mosaic.formatTime. Update to use aura ui:outputDateTime component instead.');
        var GMT_TO_EST_OFFSET_HOURS = -5.0;
        var HOUR_IN_MILLISECONDS = 3600000;
        //var MINUTE_IN_MILLISECONDS = 60000;


        // Had to split and feed in each piece of the time individually for IE support
        var inputTime = time.split(".")[0].split(":");
        var inputHour = parseInt(inputTime[0]);
        var inputMinute = parseInt(inputTime[1]);
        var inputSecond = parseInt(inputTime[2]);


        //var gmtDateTimeObject = new Date("1970-01-01T" + time);
        var gmtDateTimeObject = new Date(1970, 1, 1, inputHour, inputMinute, inputSecond);
        var utcDateTimeInMilliseconds = gmtDateTimeObject.getTime() /*+ (gmtDateTimeObject.getTimezoneOffset() * MINUTE_IN_MILLISECONDS)*/;
        var estDateTimeObject = new Date(utcDateTimeInMilliseconds + (HOUR_IN_MILLISECONDS * GMT_TO_EST_OFFSET_HOURS));

        var hours = padLeftWithZero(estDateTimeObject.getHours());
        var minutes = padLeftWithZero(estDateTimeObject.getMinutes());

        return hours + ":" + minutes + " ET";
    }


    /*-------------------------------------------
	  Form Validation Functions
    -------------------------------------------*/

    /**
     * Errors is an array of error objects.  A single error object follows the structure below:
     * {
     *     "inputAuraId" 			      : "",    //  This is the aura:id of the input component
     *     "inputId" 				        : "",    //  This is the id of the input component
     *     "fieldLevelErrorAuraId"  : "",    //  This is the aura:id of the fieldLevelError component
     *     "fieldLevelErrorMessage" : "",    //  This is the error message that is to be displayed below the input
     *     "formLevelErrorMessage"  : ""     //  This is the question that is to be displayed in the form level error dialog
     * }
     */
    function addFieldLevelErrors(component, errorResponses) {
      console.log('Calling deprecated method mosaic.addFieldLevelErrors. Update to mosaic2.lightning.addFieldLevelErrors and remove component argument');
        errorResponses.forEach(function(errorResponse) {
            component = errorResponse.component;
            console.log('in loop', errorResponse.fieldLevelErrorAuraId, component.find(errorResponse.fieldLevelErrorAuraId));
            var errorComponent = component.find(errorResponse.fieldLevelErrorAuraId);
            if (errorComponent.length) {
                errorComponent = errorComponent[0];
            }
            errorComponent.setMessage(errorResponse.fieldLevelErrorMessage);
            errorComponent.setRendered(true);


            console.log('component', errorComponent);

            var inputElement = document.getElementById(errorResponse.inputId);
            if (!$A.util.isEmpty(inputElement)) {
                inputElement.classList.add("error");
            }

            //Check for MosInputDate
            var targetComponent = component.find(errorResponse.inputAuraId);
            if (!$A.util.isEmpty(targetComponent) && targetComponent.isInstanceOf("c:MosInputDate")) {
                addInputDateErrorClass(errorResponse);
            }
        });
    }

    /**
     * Adds the CSS error class to the three input fields on MosInputDate
     * @author Michael Nation (Deloitte Consulting)
     */
    function addInputDateErrorClass(errorResponse) {
      console.log('Calling deprecated method mosaic.addInputDateErrorClass. Update to mosaic2.lightning.addInputDateErrorClass');
        var component = errorResponse.component;
        var inputDateComponent = component.find(errorResponse.inputAuraId);
        if (!$A.util.isEmpty(inputDateComponent)) {
            var inputMonthComponent = inputDateComponent.find("mm");
            if (!$A.util.isEmpty(inputMonthComponent)) {
                //removing the error class first will prevent adding the error class to the component when it already has it.
                $A.util.removeClass(inputMonthComponent, "error");
                $A.util.addClass(inputMonthComponent, "error");
            }

            var inputDayComponent = inputDateComponent.find("dd");
            if (!$A.util.isEmpty(inputDayComponent)) {
                $A.util.removeClass(inputDayComponent, "error");
                $A.util.addClass(inputDayComponent, "error");
            }

            var inputYearComponent = inputDateComponent.find("yyyy");
            if (!$A.util.isEmpty(inputYearComponent)) {
                $A.util.removeClass(inputYearComponent, "error");
                $A.util.addClass(inputYearComponent, "error");
            }
        }
    }

    //Creates and returns a new errorResponse
    function createErrorResponse(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage) {
      console.log('Calling deprecated method mosaic.createErrorResponse. Update to mosaic2.lightning.createErrorResponse');
        return {
            "component"                 : component,
            "inputAuraId"               : inputName,
            "inputId"                   : component.getGlobalId() + inputName,
            "fieldLevelErrorAuraId"     : inputName + "-error",
            "fieldLevelErrorMessage"    : fieldLevelErrorMessage,
            "formLevelErrorMessage"     : formLevelErrorMessage
        };
    }

    /**
     * Returns the error message that should display on an invalid date value tex
     * @return {String}
     * @author Michael Nation (Deloitte Consulting)
     */
    function getDateRangeErrorMessage() {
        console.log('Calling deprecated method mosaic.getDateRangeErrorMessage. Update to mosaic2.validate.getDateRangeErrorMessage');
        return "The date values you have entered are invalid or incomplete.";
    }

    /**
     * Returns the error message that should display on an invalid email text field upon validation
     * @return {String}
     * @author Michael Nation (Deloitte Consulting)
     */
    function getEmailFormatErrorMessage() {
        console.log('Calling deprecated method mosaic.getEmailFormatErrorMessage. Update to mosaic2.validate.getEmailFormatErrorMessage');
        return "Email must be in the form of an email address (for example, john@acme.com)";
    }

    /**
     * Returns the error message that should display on an empty text field upon validation
     * @return {String}
     * @author Michael Nation (Deloitte Consulting)
     */
    function getEmptyInputErrorMessage() {
        console.log('Calling deprecated method mosaic.getEmptyInputErrorMessage. Update to mosaic2.validate.getEmptyInputErrorMessage');
        return "This is a required input field, please populate.";
    }

    /**
     * Returns the error message that should display on an empty checkbox InputSelectBlocks upon validation
     * @return {String}
     * @author Michael Nation (Deloitte Consulting)
     */
    function getEmptyCheckboxBlocksErrorMessage() {
       console.log('Calling deprecated method mosaic.getEmptyCheckboxBlocksErrorMessage. Update to mosaic2.validate.getEmptyCheckboxBlocksErrorMessage');
        return "This is a required input field, please select at lease one option.";
    }

    /**
     * Returns the error message that should display on an empty radio InputSelectBlocks upon validation
     * @return {String}
     * @author Michael Nation (Deloitte Consulting)
     */
    function getEmptyRadioBlocksErrorMessage() {
      console.log('Calling deprecated method mosaic.getEmptyRadioBlocksErrorMessage. Update to mosaic2.validate.getEmptyRadioBlocksErrorMessage');
        return "This is a required input field, please select an option.";
    }

    /**
     * Returns the error message that should display on an invalid username text field upon validation
     * @return {String}
     * @author Michael Nation (Deloitte Consulting)
     */
    function getUsernameFormatErrorMessage() {
      console.log('Calling deprecated method mosaic.getUsernameFormatErrorMessage. Update to mosaic2.validate.getUsernameFormatErrorMessage');
        return "Username must be in the form of an email address (for example, john@acme.com)";
    }

    //Hides field level error component
    function hideFieldLevelErrors(component, inputNames) {
      console.log('Calling deprecated method mosaic.hideFieldLevelErrors. Update to mosaic2.lightning.hideFieldLevelErrors');
        inputNames.forEach(function(inputName) {
            var inputErrorComponent = component.find(inputName + "-error");
            if (!$A.util.isEmpty(inputErrorComponent)) {
                inputErrorComponent.setRendered(false);
            }
        });
    }

    //Hides field level error component
    //Removes red CSS border from input text fields
    function removeInputTextErrors(component, inputNames) {
      console.log('Calling deprecated method mosaic.removeInputTextErrors. Update to mosaic2.lightning.removeInputTextErrors');
    	hideFieldLevelErrors(component, inputNames);

        inputNames.forEach(function(inputName) {
            var inputComponent = component.find(inputName);
            if (!$A.util.isEmpty(inputComponent)) {
                inputComponent.getElement().classList.remove("error");
            }
        });
    }

    //Removes red CSS border from MosPicklist input field
    function removePicklistErrorClass(component, picklistComponentAuraId) {
      console.log('Calling deprecated method mosaic.removePicklistErrorClass. Update to mosaic2.lightning.removePicklistErrorClass');
        var picklistComponent = component.find(picklistComponentAuraId);
        if (!$A.util.isEmpty(picklistComponent)) {
            var selectComponent = picklistComponent.find("picklist");
            if (!$A.util.isEmpty(selectComponent)) {
                selectComponent.getElement().classList.remove("error");
            }
        }
    }

    //Removes red CSS border from multiple MosPicklist input fields
    function removePicklistErrorClasses(component, picklistComponentAuraIds) {
      console.log('Calling deprecated method mosaic.removePicklistErrorClasses. Update to mosaic2.lightning.removePicklistErrorClasses');
        picklistComponentAuraIds.forEach(function(picklistComponentAuraId) {
            removePicklistErrorClass(component, picklistComponentAuraId);
        });
    }

    //Removes red CSS border from multiple MosInputDate input fields
    function removeInputDateErrorClass(component, inputDateComponentAuraId) {
      console.log('Calling deprecated method mosaic.removeInputDateErrorClass. Update to mosaic2.lightning.removeInputDateErrorClass');
        var inputDateComponent = component.find(inputDateComponentAuraId);
        if (!$A.util.isEmpty(inputDateComponent)) {
            var inputMonthComponent = inputDateComponent.find("mm");
            if (!$A.util.isEmpty(inputMonthComponent)) {
                var inputMonthElement = inputMonthComponent.getElement();
                inputMonthElement.classList.remove("error");
            }

            var inputDayComponent = inputDateComponent.find("dd");
            if (!$A.util.isEmpty(inputDayComponent)) {
                var inputDayElement = inputDayComponent.getElement();
                inputDayElement.classList.remove("error");
            }

            var inputYearComponent = inputDateComponent.find("yyyy");
            if (!$A.util.isEmpty(inputYearComponent)) {
                var inputYearElement = inputYearComponent.getElement();
                inputYearElement.classList.remove("error");
            }
        }
    }

    /**
     * If errors parameter is not empty, errors are passed into MosNotification component,
     *     which displays each error message in an anchor tag.
     *     Window will scroll to the MosNotification component
     * If errors parameter is empty, MosNotification component is hidden
     */
    function setFormLevelErrors(component, errors, notificationComponentName, title, subtitle) {
      console.log('Calling deprecated method mosaic.setFormLevelErrors. Update to mosaic2.lightning.setFormLevelErrors');
        var formLevelErrorComponent = component.find(notificationComponentName);
        formLevelErrorComponent.setErrors(errors);

        if($A.util.isEmpty(errors)) {
            formLevelErrorComponent.setRendered(false);
        } else {
            if(!$A.util.isEmpty(title)) {
                formLevelErrorComponent.setTitle(title);
            }

            if(!$A.util.isEmpty(subtitle)) {
                formLevelErrorComponent.setTitle(subtitle);
            }

            formLevelErrorComponent.setRendered(true);
            formLevelErrorComponent.setFocus();

            var section = document.getElementById(component.getGlobalId() + notificationComponentName);
            window.scrollTo(0, section.offsetTop - 10);
        }
    }

    /**
     * Function is used for MosInputDate component
     * If the dateValue has an invalid date range, an error object will be returned
     * Else, null is returned
     * @author Michael Nation (Deloitte Consulting)
     */
    function validateInputDateForRange(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage) {
      console.log('Calling deprecated method mosaic.validateInputDateForRange. Update to mosaic2.lightning.validateInputDateForRange');
        var errorResponse = null;

        var inputDateComponent = component.find(inputName);
        if (!$A.util.isEmpty(inputDateComponent)) {
            if (!inputDateComponent.get("v.isValidDate")) {
                errorResponse = mosaic.createErrorResponse(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage);
                if (!$A.util.isEmpty(errorResponse)) {
                    errorResponse.inputId = inputDateComponent.getGlobalId() + "mm";
                }
            }
        }

        return errorResponse;
    }

    /**
     * Function is used for MosInputDate component
     * If the dateValue is empty, an error object will be returned
     * Else, null is returned
     * @author Michael Nation (Deloitte Consulting)
     */
    function validateInputDateForEmpty(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage) {
      console.log('Calling deprecated method mosaic.validateInputDateForEmpty. Update to mosaic2.lightning.validateInputDateForEmpty');
        var errorResponse = null;

        var inputDateComponent = component.find(inputName);
        if (!$A.util.isEmpty(inputDateComponent)) {
            if ($A.util.isEmpty(inputDateComponent.get("v.dateValue"))) {
                errorResponse = createErrorResponse(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage);
                if (!$A.util.isEmpty(errorResponse)) {
                    errorResponse.inputId = inputDateComponent.getGlobalId() + "mm";
                }
            }
        }

        return errorResponse;
    }

    /**
 	 * Function is used for input fields of type radio or checkbox
     * If the input is not checked, an error object will be returned
     * Else, null is returned
     * @author Michael Nation (Deloitte Consulting)
 	 */
    function validateInputForChecked(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage) {
      console.log('Calling deprecated method mosaic.validateInputForChecked. Update to mosaic2.lightning.validateInputForChecked');
        var errorResponse = null;

        var inputComponent = component.find(inputName);
        if (!$A.util.isEmpty(inputComponent)) {
            var inputElement = inputComponent.getElement();
            if(!inputElement.checked) {
                errorResponse = createErrorResponse(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage);
            }
        }

        return errorResponse;
    }

    //If zero inputBlocks have been selected, an error object will be returned.
    //Else, null is returned
    function validateInputSelectBlocksForEmpty(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage) {
      console.log('Calling deprecated method mosaic.validateInputSelectBlocksForEmpty. Update to mosaic2.lightning.validateInputSelectBlocksForEmpty');
        var errorResponse = null;

        var inputBlocksComponent = component.find(inputName);
        if (!$A.util.isEmpty(inputBlocksComponent)) {
            var selectedValuesIsEmpty = false;

            var inputType = inputBlocksComponent.get("v.inputType");
            if (inputType === "checkbox") {
                var selectedCheckboxValues = inputBlocksComponent.get("v.selectedCheckboxValues");
                if ($A.util.isEmpty(selectedCheckboxValues)) {
                    selectedValuesIsEmpty = true;
                }
            } else if (inputType === "radio") {
                var selectedRadioValue = inputBlocksComponent.get("v.selectedRadioValue");
                if ($A.util.isEmpty(selectedRadioValue)) {
                    selectedValuesIsEmpty = true;
                }
            } else {
                console.log("MosInputSelectBlocks has an invalid inputType. AuraId is:" + inputName);
            }

            if (selectedValuesIsEmpty) {
            	errorResponse = createErrorResponse(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage);
            	errorResponse.inputId = inputBlocksComponent.get("v.firstInputId");
            }
        }

        return errorResponse;
    }

    //If the input field has an invalid email format, an error object will be returned. (Note: an empty input field is considered valid)
    //Else, null is returned
    function validateInputTextForEmail(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage) {
      console.log('Calling deprecated method mosaic.validateInputTextForEmail. Update to mosaic2.lightning.validateInputTextForEmail');
        var errorResponse = null;

        var emailComponent = component.find(inputName);
        if (!$A.util.isEmpty(emailComponent)) {
            var emailValue = emailComponent.getElement().value.trim();
            if (!$A.util.isEmpty(emailValue)) {
                var atpos = emailValue.indexOf("@");
                var dotpos = emailValue.lastIndexOf(".");
                if ((atpos < 1) || (dotpos < atpos + 2) || (dotpos + 2 >= emailValue.length)) {
                    errorResponse = createErrorResponse(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage);
                }
            }
        }

        return errorResponse;
    }

    //If the input field is empty, an error object will be returned.
    //Else, null is returned
    function validateInputTextForEmpty(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage) {
      console.log('Calling deprecated method mosaic.validateInputTextForEmpty. Update to mosaic2.lightning.validateInputTextForEmpty');
        var errorResponse = null;

        var inputComponent = component.find(inputName);
        if (!$A.util.isEmpty(inputComponent)) {
            var inputValue = inputComponent.getElement().value.trim();
            if($A.util.isEmpty(inputValue)) {
                errorResponse = createErrorResponse(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage);
            }
        }

        return errorResponse;
    }

    //If the input field is empty, an error object will be returned.
    //Else, null is returned
    function validatePicklistForEmpty(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage) {
      console.log('Calling deprecated method mosaic.validatePicklistForEmpty. Update to mosaic2.lightning.validatePicklistForEmpty');
        var errorResponse = null;

        var picklistComponent = component.find(inputName);
        if (!$A.util.isEmpty(picklistComponent)) {
            var selectedPicklistValue = picklistComponent.get("v.selectedValue");
            if($A.util.isEmpty(selectedPicklistValue)) {
                errorResponse = createErrorResponse(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage);
                errorResponse.inputId = picklistComponent.getGlobalId() + "_picklist";
            }
        }

        return errorResponse;
    }

    /**
     * Function is used to validate the input fields on
     * MosQuestions component
     * @author Michael Nation (Deloitte Consulting)
     */
    function validateQuestionsForEmpty(component, inputName) {
      console.log('Calling deprecated method mosaic.validateQuestionsForEmpty. Update to mosaic2.lightning.validateQuestionsForEmpty');
        var errors = [];

        var questionsComponent = component.find(inputName);
        if (!$A.util.isEmpty(questionsComponent)) {
            var primaryQuestionErrorResponse = validateQuestionForEmpty(questionsComponent, "primary-question");
            if (primaryQuestionErrorResponse !== null) {
                errors.push(primaryQuestionErrorResponse);
            }

            var secondQuestionErrorResponse = validateQuestionForEmpty(questionsComponent, "second-question");
            if (secondQuestionErrorResponse !== null) {
                errors.push(secondQuestionErrorResponse);
            }

            var thirdQuestionErrorResponse = validateQuestionForEmpty(questionsComponent, "third-question");
            if (thirdQuestionErrorResponse !== null) {
                errors.push(thirdQuestionErrorResponse);
            }
        }

        return errors;
    }

    /**
     * Function is used to validate the input fields on
     * MosQuestion component
     * @author Michael Nation (Deloitte Consulting)
     */
    function validateQuestionForEmpty(questionsComponent, inputName) {
      console.log('Calling deprecated method mosaic.validateQuestionForEmpty. Update to mosaic2.lightning.validateQuestionForEmpty');
        var errorResponse = null;

        var questionComponent = questionsComponent.find(inputName);
        if (!$A.util.isEmpty(questionComponent) && !$A.util.isEmpty(questionComponent.get("v.question"))) {
            var question = questionComponent.get("v.question");
            if (question.required) {
                switch (question.questionType) {
                    case "Free form text":
                        errorResponse = validateInputTextForEmpty(questionComponent, question.questionType, getEmptyInputErrorMessage(), question.title);
                        break;
                    case "Date":
                        errorResponse = validateInputDateForRange(questionComponent, question.questionType, getDateRangeErrorMessage(), question.title);
                        if (errorResponse === null) {
                            errorResponse = validateInputDateForEmpty(questionComponent, question.questionType, getEmptyInputErrorMessage(), question.title);
                        }
                        break;
                    case "State":
                        errorResponse = validatePicklistForEmpty(questionComponent, question.questionType, getEmptyInputErrorMessage(), question.title);
                        break;
                    case "Multiple options, single answer":
                        errorResponse = validateInputSelectBlocksForEmpty(questionComponent, question.questionType, getEmptyRadioBlocksErrorMessage(), question.title);
                        break;
                }
            }
        }

        return errorResponse;
    }

    /**
     * Function is used to check if a selection has been made
     * on MosYesNoBlocks component
     * @author Michael Nation (Deloitte Consulting)
     */
    function validateYesNoBlocksForEmpty(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage) {
      console.log('Calling deprecated method mosaic.validateYesNoBlocksForEmpty. Update to mosaic2.lightning.validateYesNoBlocksForEmpty');
        var errorResponse = null;

        var yesNoBlocksComponent = component.find(inputName);
        if (!$A.util.isEmpty(yesNoBlocksComponent)) {
            var yesNoInputSelectBlocks = yesNoBlocksComponent.find("input-yes-no");
            if (!$A.util.isEmpty(yesNoInputSelectBlocks) && $A.util.isEmpty(yesNoInputSelectBlocks.get("v.selectedRadioValue"))) {
                errorResponse = createErrorResponse(component, inputName, fieldLevelErrorMessage, formLevelErrorMessage);
                if (!$A.util.isEmpty(errorResponse)) {
                    errorResponse.inputId = yesNoInputSelectBlocks.get("v.firstInputId");
                }
            }
        }

        return errorResponse;
    }


    /*-------------------------------------------
	  Miscellaneous Functions
    -------------------------------------------*/

    /**
     * Adds parenthesis to the Product's SubTitle text.
 	 * Recurses down into subProducts to repeat the same function
     * @param {Object} listItem - The object that contains the subTitle
     * @param {String} objectType - Apex class name
     * @author Michael Nation (Deloitte Consulting)
 	 */
    function addParenthesisToSubTitleForListItem(listItem, objectType) {
        console.log('Deprecated: replace mosaic.addParenthesisToSubTitleForListItem with mosaic2.util.addParenthesisToSubTitleForListItems and pass listItem as an Array not an Object.');
        if (!$A.util.isEmpty(listItem.subTitle)) {
            listItem.subTitle = "(" + listItem.subTitle + ")";
        }

        var subObjects = [];
        if (objectType === "Product") {
            subObjects = listItem.subProducts;
        } else if (objectType === "Issue") {
            subObjects = listItem.subIssues;
        } else if (objectType === "MosListItem") {
            subObjects = listItem.subItems;
        }

        for (var i = 0; i < subObjects.length; i++) {
        	this.addParenthesisToSubTitleForListItem(subObjects[i], objectType);
        }
    }

    /**
 	 * Iterates through all top-level products and calls the
     * addParenthesisToSubTitleForProduct method for each product
     * If listItems is empty (null, undefined, length zero), return an empty array
     * @param {List} listItems - top-level items
     * @param {String} objectType - Apex class name
     * @author Michael Nation (Deloitte Consulting)
 	 */
    function addParenthesisToSubTitleForListItems(listItems, objectType) {
        console.log('Deprecated: replace mosaic.addParenthesisToSubTitleForListItems with mosaic2.util.addParenthesisToSubTitleForListItems.');
        if ($A.util.isEmpty(listItems)) {
            return [];
        }

        for (var i = 0; i < listItems.length; i++) {
            this.addParenthesisToSubTitleForListItem(listItems[i], objectType);
        }

        return listItems;
    }

    function convertMapValuesToString(map) {
        console.log('Deprecated: replace mosaic.convertMapValuesToString with mosaic2.util.convertMapValuesToString.');
        for(var key in map) {
            if(map.hasOwnProperty(key) && map[key] !== null) {
                map[key] = map[key].toString();
            }
        }

        return map;
    }

    /**
     * @description Add a disabled button CSS class or remove it from a button.
     * @param {Object} button - The button to disable.
     * @param {boolean} isDisabled - Whether to disable the button or not.
     */
    function disableButton(button, isDisabled) {
        console.log('Deprecated: replace mosaic.disableButton with mosaic2.dom.setControlDisabledState.');
        button.disabled = isDisabled;
        if (isDisabled) {
            button.classList.add("btn__disabled");
        } else {
            button.classList.remove("btn__disabled");
        }
    }

    /**
     * Iterates through all the objects and returns the object that matches the fieldValue
     * @param {Array} objects
     * @param {String} fieldName - name of the key on each object (Map)
     * @param {String} fieldValue
     * @author Michael Nation (Deloitte Consulting)
     */
    function getObjectByField(objects, fieldName, fieldValue) {
      console.log('Deprecated: replace mosaic.getObjectByField with mosaic2.util.getObjectByField.');
        var object = null;

        if (!$A.util.isEmpty(objects)) {
            for (var i = 0; i < objects.length; i++) {
                if (objects[i][fieldName] === fieldValue) {
                    object = objects[i];
                    break;
                }
            }
        }

        return object;
    }

    // 1 -> 01
    function padLeftWithZero(input) {
        console.log('Deprecated: replace mosaic.padLeftWithZero with mosaic2.util.padLeftWithZero.');
        if(input.toString().length < 2) {
            input = "0" + input;
        }

        return input;
    }

    function setButtonForWaitingState(buttonId, waitingIndicatorId, isWaiting) {
        console.log('Deprecated: replace mosaic.setButtonForWaitingState with mosaic2.dom.setButtonForWaitingState.');
    	var button = document.getElementById(buttonId);
    	var waitingIndicator = document.getElementById(waitingIndicatorId);

    	if (!$A.util.isEmpty(button) && !$A.util.isEmpty(waitingIndicator)) {
    		mosaic2.dom.setControlDisabledState(button, isWaiting);

	        if (isWaiting) {
	            waitingIndicator.classList.remove("hide");
                waitingIndicator.classList.remove("u-hidden");
	        } else {
	            waitingIndicator.classList.add("hide");
                waitingIndicator.classList.add("u-hidden");
	        }
    	}
    }

    // Update the "Characters remaining" count found below textarea inputs in all response body components
    function updateCharactersRemaining(component, event, maxCharacterCount) {
        console.log('Deprecated: replace mosaic.updateCharactersRemaining with mosaic2.lightning.updateCharactersRemaining.');
        var textareaBeingUpdated = event.target;
        var textareaBeingUpdatedId = event.target.id.replace(component.getGlobalId(), "");
        var textareaBeingUpdatedCurrentCharacterCount = textareaBeingUpdated.value.length;
        var textareaCharactersRemainingCount = component.find(textareaBeingUpdatedId + "-characters-remaining").getElement();

        var charactersRemainingCount = maxCharacterCount - textareaBeingUpdatedCurrentCharacterCount;

        textareaCharactersRemainingCount.innerText = charactersRemainingCount.toLocaleString();
    }

    //If value exists in array, return true.
    //If value does not exist in array, return false.
    function valueExistsInArray(value, array) {
        console.log('Deprecated: replace mosaic.valueExistsInArray with mosaic2.util.valueExistsInArray.');
        var valueExists = false;
        if (!$A.util.isEmpty(array)) {
            for (var i = 0; i < array.length; i++) {
                if (value === array[i]) {
                    valueExists = true;
                    break;
                }
            }
        }

        return valueExists;
    }

})(window);
