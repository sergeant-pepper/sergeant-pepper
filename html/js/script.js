
var default_element_time = 1000;

var sequences = [
  [{ /* SEQUENCE_IDLE */
    content: 'img/emojis/grinning_face.png'
  }, {
    content: 'img/emojis/smiling_face.png'
  }, {
    content: 'img/emojis/thinking_face.png'
  }, {
    content: 'img/emojis/relieved.png'
  }], [{ /* SEQUENCE_PARTY */
    content: 'img/emojis/rocket.png'
  }, {
    content: 'img/emojis/party_popper.png'
  }, {
    content: 'img/emojis/beers.png'
  }], [{ /* SEQUENCE_NEW_PERSON */
    content: 'img/emojis/waving.png'
  }, {
    content: 'img/emojis/robot.png'
  }, {
    content: 'img/emojis/smiling_face.png️'
  }], [{ /* SEQUENCE_NEW_PERSON_DAVID */
    content: 'img/emojis/waving.png'
  }, {
    content: 'img/person/David.png'
  }], [{ /* SEQUENCE_NEW_PERSON_PETER */
    content: 'img/emojis/waving.png'
  }, {
    content: 'img/person/Peter.png'
  }], [{ /* SEQUENCE_NEW_PERSON_MARKUS */
    content: 'img/emojis/waving.png'
  }, {
    content: 'img/person/Markus.png'
  }], [{ /* SEQUENCE_SAD_PERSON */
    content: 'img/emojis/thinking.png'
  }, {
    content: 'img/emojis/bulb.png'
  }, {
    content: 'img/emojis/party_parrot.gif',
    timer: 4000
  }], [{ /* SEQUENCE_APPOINTMENT */
    content: 'img/emojis/calendar.png'
  }, {
    content: 'img/emojis/pointing_up.png'
  }], [{ /* SEQUENCE_APPOINTMENT_PETER */
    content: 'img/emojis/calendar.png'
  }, {
    content: 'img/calendar/Peter.png'
  }], [{ /* SEQUENCE_APPOINTMENT_MARKUS */
    content: 'img/emojis/calendar.png'
  }, {
    content: 'img/calendar/Markus.png'
  }], [{ /* SEQUENCE_BYE_BYE */
    content: 'img/emojis/waving.png'
  }, {
    content: 'img/emojis/sad.png'
  }, {
    content: 'img/emojis/sad_pepe.png'
  }]
];

// Constants.
var SEQUENCE_IDLE = 0;
var SEQUENCE_PARTY = 1;
var SEQUENCE_NEW_PERSON = 2;
var SEQUENCE_NEW_PERSON_DAVID = 3;
var SEQUENCE_NEW_PERSON_PETER = 4;
var SEQUENCE_NEW_PERSON_MARKUS = 5;
var SEQUENCE_SAD_PERSON = 6;
var SEQUENCE_APPOINTMENT = 7;
var SEQUENCE_APPOINTMENT_PETER = 8;
var SEQUENCE_APPOINTMENT_MARKUS = 9;
var SEQUENCE_BYE_BYE = 10;


// Global variables.
var $contentWrapper;
var currentSequenceIndex = SEQUENCE_IDLE;
var currentSequenceContent = sequences[currentSequenceIndex];
var currentSequenceElementIndex = 0;
var currentHandler = undefined;
var ALMemory;


// Helper functions.
function displayElement(element) {
  // Display the current element.
  if (element.content.indexOf('.') === -1) {
    // Emoji.
    $contentWrapper.html('<p>' + element.content + '</p>');
  }
  else {
    // Image.
    $contentWrapper.html('<img src="' + element.content + '" alt="" title="">');
  }

  // Update sequence variables.
  if (currentSequenceElementIndex + 1 < currentSequenceContent.length) {
    currentSequenceElementIndex++;
  }
  else {
    if (currentSequenceIndex !== SEQUENCE_IDLE) {
      // If we're not on idle but we've finished the sequence, return to the idle sequence.
      currentSequenceIndex = SEQUENCE_IDLE;
      currentSequenceContent = sequences[currentSequenceIndex];
    }
    currentSequenceElementIndex = 0;
  }

  // Display the next item.
  var elementTimer = element.timer ? element.timer : default_element_time;

  currentHandler = window.setTimeout(function() {
    var currentElement = currentSequenceContent[currentSequenceElementIndex];
    displayElement(currentElement);
  }, elementTimer);
}

function clearHandler() {
  window.clearTimeout(currentHandler);
}

function fireNewHandler() {
  var element = currentSequenceContent[currentSequenceElementIndex];
  displayElement(element);
}

function updateHandler(sequenceId) {
  clearHandler();
  currentSequenceIndex = sequenceId;
  currentSequenceElementIndex = 0;
  currentSequenceContent = sequences[currentSequenceIndex];
  fireNewHandler();
}

// API functions.
window.setIdle = function() { updateHandler(SEQUENCE_IDLE); };
window.setParty = function() { updateHandler(SEQUENCE_PARTY); };
window.setNewPerson = function() { updateHandler(SEQUENCE_NEW_PERSON); };
window.setNewPersonDavid = function() { updateHandler(SEQUENCE_NEW_PERSON_DAVID); };
window.setNewPersonPeter = function() { updateHandler(SEQUENCE_NEW_PERSON_PETER); };
window.setNewPersonMarkus = function() { updateHandler(SEQUENCE_NEW_PERSON_MARKUS); };
window.setSadPerson = function() { updateHandler(SEQUENCE_SAD_PERSON); };
window.setAppointment = function() { updateHandler(SEQUENCE_APPOINTMENT); };
window.setAppointmentPeter = function() { updateHandler(SEQUENCE_APPOINTMENT_PETER); };
window.setAppointmentMarkus = function() { updateHandler(SEQUENCE_APPOINTMENT_MARKUS); };
window.setByeBye = function() { updateHandler(SEQUENCE_BYE_BYE); };

window.callbackFaceRecognized = function(personName) {
  switch (personName) {
    case 'David':
      window.setNewPersonDavid();
      break;
    case 'Peter':
      window.setNewPersonPeter();
      break;
    case 'Markus':
      window.setNewPersonMarkus();
      break;

    default:
      window.setNewPerson();
      break;
  }
};

window.callbackAppointment = function(personName) {
  switch (personName) {
    case 'Peter':
      window.setAppointmentPeter();
      break;
    case 'Markus':
      window.setAppointmentMarkus();
      break;

    default:
      window.setAppointment();
      break;
  }
};

(function($) {
  // Init content wrapper.
  $contentWrapper = $('#content-wrapper');

  // Fire the first sequence.
  fireNewHandler();

  // Check for new events.
  RobotUtils.connect(function(session) {
    // Init ALMemory.
    session.service('ALMemory').then(function(serv) {
        ALMemory = serv;
      },
      function() {}
    );

    // Subscribe to events.
    RobotUtils.subscribeToALMemoryEvent('FACE_RECOGNIZED', window.callbackFaceRecognized);
    RobotUtils.subscribeToALMemoryEvent('SAD_PERSON', window.setSadPerson);
    RobotUtils.subscribeToALMemoryEvent('CALENDAR_REMINDER', window.callbackAppointment);
    RobotUtils.subscribeToALMemoryEvent('ALTracker/TargetLost', window.setByeBye);
  }, function() {});
})(jQuery);
