let wordBank = [
    'REPEAT', 'LOWER', 'APPLE', 'PARENT',
    'SEVERAL', 'GRAPH', 'CHOSEN', 'TOBACCO',
    'STOPPED', 'COMFORTABLE', 'CARBON', 'NUMERAL',
    'FIRST', 'ORGANIZED', 'OUTLINE', 'PLEASANT',
    'FORWARD', 'COUNTRY', 'VOYAGE', 'ABILITY',
    'KNOWLEDGE', 'MOLECULAR', 'CLASSROOM', 'SHELF',
    'THROAT', 'LAUGH', 'ADDITION', 'PUPIL',
    'STRAIGHT', 'PERSON', 'PIECE', 'CORRECT',
    'BREAKFAST', 'DIFFERENT', 'WEIGHT', 'FACTOR',
    'BUILDING', 'NEEDS', 'METHOD', 'CONNECTED',
    'FORTH', 'LEATHER', 'BROKEN', 'CHANGING',
    'KNIFE', 'MYSTERIOUS', 'RESULT', 'CANAL',
    'HARBOR', 'PIECE', 'COWBOY', 'COMPLETELY',
    'WRITE', 'PEOPLE', 'TALES', 'OWNER',
    'POSITION', 'POLICEMAN', 'CONTAIN', 'DONKEY',
    'HOSPITAL', 'GOOSE', 'SEPARATE', 'FLAME', 'WHALE', 'OLDEST', 'PARTS', 'CHANCE',
    'BIGGER', 'TROOPS', 'DRIED', 'WHEAT',
    'EATEN', 'HIMSELF', 'OFFICIAL', 'WROTE',
    'PASSAGE', 'RECENTLY', 'DANCE', 'EXCLAIMED',
    'LENGTH', 'NEARER', 'SELDOM', 'AWARE',
    'ELEVEN', 'MUSICAL', 'FUNCTION', 'DAILY',
    'PURPOSE', 'INSTEAD', 'HAPPENED', 'HIGHEST',
    'SERVICE', 'SPITE', 'ANCIENT', 'CHOSE',
    'BRAVE', 'WAGON', 'SYMBOL', 'CRACK',
    'PEACE', 'CLOTH', 'TIGHT', 'ABOARD',
    'DRESS', 'CLOTHES', 'COMMAND', 'DISEASE',
    'FRIGHTEN', 'CLOUD', 'PHRASE', 'ENEMY',
    'BLANK', 'SENSE', 'SLEPT', 'AUDIENCE',
    'REPLACE', 'MATERIAL', 'FACTOR', 'RIVER',
    'INVENTED', 'LEVEL', 'LAYERS', 'DONKEY',
    'CONTINENT', 'THROUGH', 'HIDDEN', 'PRODUCTION',
    'CHILDREN', 'DAILY', 'LIVING', 'OUTSIDE', 'WORTH', 'COMING', 'HUNDRED', 'TOMORROW',
    'SETTLERS', 'REMOVE', 'HAVING', 'COLOR',
    'SQUARE', 'LUCKY', 'ABILITY', 'TELEPHONE',
    'BREEZE', 'INFORMATION', 'LEATHER', 'DROVE',
    'LIMITED', 'PARALLEL', 'TOWARD', 'EARLY',
    'NEARBY', 'HIMSELF', 'HELLO', 'ROUGH',
    'WORKER', 'GOOSE', 'LIGHT', 'ANYTHING',
    'TRUNK', 'SERVE', 'STUDIED', 'CONTAIN',
    'FINALLY', 'LABEL', 'SUBSTANCE', 'LATER',
    'PUTTING', 'SWEET', 'RAISE', 'SILLY',
    'FROZEN', 'SEASON', 'FOREST', 'OUTLINE',
    'ANIMAL', 'GOOSE', 'POUND', 'SHINNING',
    'CLEAN', 'DRESS', 'OLDEST', 'QUEEN',
    'EDUCATION', 'FINGER', 'SMALLEST', 'EARLIER',
    'BEAUTIFUL', 'EFFORT', 'STRUCK', 'APART',
    'WOULD', 'BRIGHT', 'CHAPTER', 'STATEMENT', 'SURFACE',
    'HIDDEN', 'FAMILIAR', 'THOSE', 'BEGAN',
    'LABOR', 'SENSE', 'BRANCH', 'WORRY',
    'CURRENT', 'OUGHT', 'RATHER', 'THEMSELVES',
    'LUNCH', 'STRUCK', 'EVERYWHERE', 'SCENE',
    'FLOATING', 'READER', 'SLIDE', 'FARTHER',
    'CURRENT', 'CLEAR', 'TOUCH', 'EXPLANATION',
    'THROW', 'DIFFICULT', 'EARTH', 'TEARS',
    'PARAGRAPH', 'SOURCE', 'CANNOT', 'DURING',
    'HOUSE', 'NATURE', 'GRANDFATHER', 'HOLLOW',
    'SHOULDER', 'POINT', 'DEPTH', 'PLEASE',
    'RANGE', 'OPERATION', 'WRAPPED', 'COURSE',
    'GATHER', 'GRAIN', 'AFTERNOON', 'CERTAINLY',
    'ANGLE', 'PURPLE', 'BRING', 'FATHER',
    'CREATE', 'TROOPS', 'MOTHER', 'INFORMATION',
    'SCIENTIFIC', 'CIRCUS', 'HIMSELF', 'ANSWER',
    'CLOTHING', 'DARKNESS', 'DIFFERENT', 'PIANO',
    'SUPPLY', 'MYSELF', 'SHOULDER', 'CONSONANT',
    'BRICK', 'IMMEDIATELY', 'SUGAR', 'COMPASS', 'CAREFUL', 'WHOLE', 'SPEECH',
    'BEHAVIOR', 'FASTER', 'BRICK', 'CHOOSE',
    'PRINCIPLE', 'WESTERN', 'SMOOTH', 'MATHEMATICS',
    'SUCCESS', 'NATIVE', 'LOOSE', 'NODDED',
    'COPPER', 'TYPICAL', 'BESIDE', 'MIDDLE',
    'PLASTIC', 'MEDICINE', 'METHOD', 'CONCERNED',
    'USUALLY', 'MIRROR', 'STREAM', 'DOUBLE',
    'PREVENT', 'OCEAN', 'BUTTER', 'TONGUE',
    'SMELL', 'LOCAL', 'MASSAGE', 'CLASSROOM',
    'GIVING', 'OXYGEN', 'GASOLINE', 'AUTHOR',
    'OLDEST', 'EXPRESSION', 'DIRECT', 'SWEET',
    'STEAM', 'HISTORY', 'FAVORITE', 'COMMON',
    'CHARGE', 'PROVIDE', 'BRUSH', 'PLANE',
    'CHEESE', 'TOWER', 'REPEAT', 'OPERATION',
    'USEFUL', 'INTEREST', 'HUNTER', 'CROSS',
    'ADVENTURE', 'STILL', 'MOUSE', 'SPRING',
    'EXPLAIN', 'SIMPLE', 'ORGANIZED', 'BLANKET',
    'WORTH', 'SOMETIME', 'STEEL', 'EVENING', 'PORCH', 'LIKELY', 'SLABS',
    'DECIDE', 'UNDER', 'BREAKFAST', 'REALIZE',
    'POWERFUL', 'ATTACK', 'FUTURE', 'PREVENT',
    'RESULT', 'KITCHEN', 'EVENING', 'INTRODUCED',
    'METHOD', 'MARRIED', 'MERELY', 'FASTER',
    'ARRANGE', 'WOODEN', 'HUNTER', 'BROKEN',
    'ACCORDING', 'CHARACTER', 'SHARP', 'OUTLINE',
    'TIRED', 'PROBABLY', 'JOURNEY', 'ACCEPT',
    'UPWARD', 'MAGNET', 'FOREIGN', 'FRIEND',
    'FORGOTTEN', 'WITHIN', 'ENGINEER', 'EQUALLY',
    'NOTICE', 'STUDENT', 'TELEVISION', 'FORTH',
    'MINUTE', 'HIMSELF', 'FORTH', 'CHIEF',
    'LEARN', 'STORM', 'GOLDEN', 'ATOMIC',
    'THANK', 'WORSE', 'OLDER', 'STRIKE',
    'ALTHOUGH', 'OFFICIAL', 'DISCUSSION', 'SUPPER',
    'STRONGER', 'EVENTUALLY', 'INTERIOR', 'ANYBODY',
    'RELATED', 'HABIT', 'SLOWLY', 'LIVING',
    'OPINION', 'OPERATION', 'WELCOME', 'SPITE',
    'HUNGRY', 'CLASS', 'PARTLY', 'BLACK',
    'LOVELY', 'BASEBALL', 'SENTENCE', 'PRETTY',
    'ORIGIN', 'EXPERIMENT', 'ORANGE', 'PRACTICE',
    'REPRESENT', 'INCOME', 'READY', 'SOURCE',
    'THIRTY', 'HUNDRED', 'BREATHE', 'INSIDE',
    'GLOBE', 'NEARER', 'CHARGE', 'TOWARD',
    'BIRTHDAY', 'CLOCK', 'AROUND', 'THEORY',
    'FLOATING', 'POSSIBLY', 'RELATED', 'REFUSED',
    'LITTLE', 'RESULT', 'STARED', 'MERELY',
    'RUBBER', 'INDIVIDUAL', 'IMPROVE', 'SERVE',
    'CORNER', 'TELEPHONE', 'OCEAN', 'STRAIGHT',
    'ORIGIN', 'LEADER', 'READER', 'BREATH',
    'SHINNING', 'SHEEP', 'FELLOW', 'GLOBE',
    'PARALLEL', 'PRODUCT', 'OFFICER', 'SKILL',
    'AGAIN', 'DEATH', 'TOPIC', 'MUSICAL', 'MOSTLY',
    'NATION', 'HEALTH', 'FENCE', 'SCREEN',
    'RECENT', 'GROWN', 'MONEY', 'STRAIGHT',
    'EFFORT', 'BEAUTIFUL', 'COMPLETE', 'ACTIVE',
    'BALLOON', 'SOMETHING', 'SETTLE', 'STRUCTURE',
    'INDEED', 'REGULAR', 'NOTHING', 'PLANNED',
    'TIRED', 'VISITOR', 'RABBIT', 'CAREFUL',
    'COMFORTABLE', 'FEWER', 'JOINED', 'EQUATOR',
    'CHARGE', 'CONSONANT', 'COMMON', 'MOTHER',
    'ARRANGEMENT', 'ORANGE', 'DESIGN', 'FOOTBALL',
    'MONKEY', 'KNOWLEDGE', 'GUIDE', 'SOMEBODY',
    'PASSAGE', 'NEARBY', 'GREATER', 'WHOSE',
    'CAPITAL', 'SHAKE', 'STRUCK', 'EXAMPLE',
    'REMARKABLE', 'INCREASE', 'ATTACK', 'SHAKE',
    'MINERALS', 'ORIGIN', 'FUNNY', 'IMAGE',
    'ALMOST', 'WHERE', 'LANGUAGE', 'PARTY', 'MANUFACTURING', 'HARDER', 'HALFWAY',
    'DEVELOPMENT', 'COOKIES', 'ADVENTURE', 'CAMERA',
    'CONSIDER', 'EXPERIENCE', 'LUNGS', 'COURT',
    'MATHEMATICS', 'EXPRESSION', 'INTEREST', 'TERRIBLE',
    'SLEPT', 'ADULT', 'HUNGRY', 'WOODEN',
    'SERVICE', 'STOOD', 'HAPPENED', 'SMILE',
    'UNDER', 'QUIET', 'POPULATION', 'SUGGEST',
    'STRANGE', 'UNTIL', 'JOURNEY', 'PASSAGE',
    'PLANET', 'SPEAK', 'POWERFUL', 'DISCUSS',
    'SWEET', 'THIRD', 'WINDOW', 'DISCOVER',
    'INTEREST', 'ENTIRE', 'PREVENT', 'MEANS',
    'GREATER', 'BUILDING', 'CONTINUED', 'PASSAGE',
    'IMAGE', 'TOMORROW', 'BENEATH', 'YESTERDAY',
    'GRAPH', 'VARIETY', 'ADVICE', 'PRINCIPAL',
    'GIVEN', 'SHEEP', 'BASIS', 'STEPPED',
    'HIGHER', 'POLICE', 'UNTIL', 'BURIED', 'DEVELOP', 'CLOSER', 'BRING', 'QUICK',
    'AVOID', 'PITCH', 'BLANK', 'PLANT',
    'HOUSE', 'COVER', 'BREATHING', 'SPEND',
    'COVER', 'INTERIOR', 'TWENTY', 'APPROPRIATE',
    'EXACTLY', 'PLEASANT', 'YELLOW', 'STOVE',
    'TROPICAL', 'BLOOD', 'THROW', 'SYSTEM',
    'YOUNG', 'TROUBLE', 'FORGOTTEN', 'DANGEROUS',
    'BUILT', 'LAUGH', 'HUNGRY', 'WHITE',
    'CLOSELY', 'FOLLOW', 'SURROUNDED', 'EXERCISE',
    'SUCCESSFUL', 'BROUGHT', 'COVER', 'UNKNOWN',
    'WORSE', 'COVER', 'VILLAGE', 'ATOMIC',
    'BRIGHT', 'LEAVE', 'SHORT', 'STRAIGHT',
    'BREEZE', 'FACTORY', 'VALUABLE', 'HONOR',
    'SOFTLY', 'EXCLAIMED', 'IMPROVE', 'MISSION',
    'OLDEST', 'COLONY', 'PLEASURE', 'EXPLANATION',
    'WILLING', 'DROPPED', 'CREATURE', 'SCREEN',
    'PERIOD', 'SCORE', 'ABOUT', 'PARTICLES',
    'WHISPERED', 'QUIETLY', 'DESIGN', 'STORE', 'WORSE', 'QUEEN', 'WROTE', 'AIRPLANE',
    'REMOVE', 'MENTAL', 'FREEDOM', 'SEASON',
    'SOCIETY', 'TYPICAL', 'TALES',
    'CUTTING', 'EXIST', 'QUIETLY', 'GLOBE',
    'DEPTH', 'WHEEL', 'WHEEL', 'ZEBRA',
    'SCENE', 'UNDER', 'TELEPHONE', 'EVERYONE',
    'ORGANIZATION', 'WEATHER', 'ANCIENT', 'STORY',
    'PIANO', 'TELEPHONE', 'NECESSARY', 'CHARACTER',
    'AVOID', 'MAGNET', 'ANYBODY', 'FLOOR',
    'GREAT', 'GRASS', 'METHOD', 'SERIES',
    'SUGGEST', 'RELATED', 'BOTTLE', 'SPECIAL',
    'AUTOMOBILE', 'TEACH', 'POINT', 'FLOOR',
    'ESSENTIAL', 'CONCERNED', 'INSTRUMENT', 'SHADE',
    'SEASON', 'MEMORY', 'MACHINERY', 'CONTRAST',
    'PROPERLY', 'ENVIRONMENT', 'REFUSED', 'SPOKEN',
    'SUCCESS', 'PLURAL', 'MATTER', 'TAUGHT',
    'METAL', 'TRIBE', 'RAISE', 'QUIETLY', 'GRANDMOTHER', 'INSIDE', 'CURRENT',
    'SYSTEM', 'LUNCH', 'STATION', 'STILL',
    'DETAIL', 'BUSINESS', 'HEADED', 'CONCERNED',
    'GENTLY', 'DIFFER', 'TASTE', 'AVAILABLE',
    'AFRAID', 'CORRECTLY', 'GREATLY', 'GENTLE',
    'SWIMMING', 'NEARER', 'FORGOTTEN', 'THINK',
    'CHOSE', 'SCIENTIST', 'STOCK', 'PEOPLE',
    'SWUNG', 'SETTLERS', 'CHOOSE', 'COLONY',
    'COVER', 'AWARE', 'INSTRUMENT', 'COURSE',
    'DARKNESS', 'SUDDEN', 'CHAIN', 'WHISTLE',
    'HAPPILY', 'MARRIED', 'EQUIPMENT', 'REMOVE',
    'BURIED', 'GLASS', 'THROUGH', 'MAYBE',
    'BECAUSE', 'MASTER', 'CAPTURED', 'THOUGHT',
    'WHOSE', 'DRIED', 'WHILE', 'PLATE',
    'ACCURATE', 'NOISE', 'ANGLE', 'SUNLIGHT',
    'ANCIENT', 'POUND', 'THUMB', 'QUIETLY',
    'ANYTHING', 'LIKELY', 'MOUTH', 'EXCITEMENT',
    'LARGE', 'WRITTEN', 'GARDEN', 'CAPTURED', 'BASIC',
    'GRAIN', 'WHALE', 'BURST', 'COLUMN',
    'IMPROVE', 'GOOSE', 'DOZEN', 'OFFICIAL',
    'MANUFACTURING', 'THESE', 'WORSE', 'PEACE',
    'PLANT', 'BRAIN', 'WORRIED', 'SPORT',
    'UNDERSTANDING', 'THROW', 'DROVE', 'OTHER',
    'BEGINNING', 'SMALLEST', 'VALUE', 'GROUP',
    'FIELD', 'PARTICULARLY', 'QUEEN', 'DANCE',
    'MINERALS', 'CONSTANTLY', 'REVIEW', 'OLDEST',
    'BEHIND', 'WOULD', 'THINK', 'HUNGRY',
    'POWER', 'FRIENDLY', 'OFFICER', 'FRIENDLY',
    'RULER', 'SHARP', 'BIRTHDAY', 'TASTE',
    'CONTRAST', 'HUSBAND', 'RIVER', 'ATMOSPHERE',
    'CATTLE', 'HUNGRY', 'TROPICAL', 'SLIGHT',
    'SHADOW', 'BRIGHT', 'FOUGHT', 'LABEL',
    'CONTRAST', 'ABOARD', 'SUGAR', 'BRIDGE',
    'ACTUAL', 'CLEAR', 'DEVELOPMENT', 'DEVELOPMENT',
    'SOLUTION', 'PROGRESS', 'CLEARLY', 'BECOMING', 'NEEDS', 'GRADUALLY', 'MATHEMATICS',
    'OCCUR', 'RUBBED', 'TITLE', 'CLOSE',
    'ESSENTIAL', 'UNION', 'RAISE', 'MISSION',
    'CIRCLE', 'ENTIRELY', 'HELPFUL', 'TRAFFIC',
    'BUILDING', 'BLIND', 'ESSENTIAL', 'NUMERAL',
    'AHEAD', 'WHICH', 'BROAD', 'BELIEVED',
    'ASLEEP', 'PROMISED', 'RUBBER', 'ACTIVITY',
    'ENEMY', 'DISCUSS', 'GASOLINE', 'SHOOT',
    'SIMILAR', 'RANGE', 'TODAY', 'CLOTH',
    'COULD', 'CERTAIN', 'WESTERN', 'BECOME',
    'CLEAN', 'RELATED', 'WILLING', 'DIRECTLY',
    'ISLAND', 'ENJOY', 'SLEPT', 'SLOWLY',
    'CLOTH', 'START', 'PERSONAL', 'FAVORITE',
    'FRONT', 'COMPOSED', 'LEVEL', 'TYPICAL',
    'MEANT', 'MOUTH', 'TRACE', 'SPELL',
    'UNION', 'SETTLE', 'SLAVE', 'FRIEND',
    'THIRTY', 'GARDEN', 'PROTECTION', 'SCIENTIFIC',
    'ACTUALLY', 'COULD', 'SCHOOL', 'QUEEN',
    'PARALLEL', 'NATIVE', 'EVERY', 'CLIMATE',
    'SKILL', 'PLACE', 'COLLEGE', 'NEEDS',
    'ANGLE', 'LIGHT', 'SHORT', 'SENSE',
    'APART', 'SELDOM', 'DEPEND', 'ZEBRA',
    'STONE', 'ABILITY', 'ORIGIN', 'SWING',
    'FINISH', 'LONGER', 'FLOATING', 'AMONG',
    'ALONE', 'SMALLEST', 'SHALL', 'SHARE',
    'THEORY', 'CHAPTER', 'CLOUD', 'THING',
    'MAINLY', 'TWICE', 'EFFECT', 'CONTRAST',
    'SHAPE', 'SUBJECT', 'STATE', 'TOWARD',
    'RELIGIOUS', 'DISCUSSION', 'THROW', 'LUNGS',
    'DEATH', 'TRUNK', 'HEADING', 'FLOOR',
    'CROSS', 'NATURAL', 'DRINK', 'CAREFUL',
    'THINK', 'SOLDIER', 'BREATH', 'POUND',
    'ANIMAL', 'ALREADY', 'ARRANGE', 'SUGGEST',
    'BESIDE'
]
let word = ""
let correctGuess
let correctArray = []
let wrongGuess = 1
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const result_p = document.querySelector(".result > p")
const dashes_span = document.getElementById("dashes")
var hangImage_src = document.getElementById("myImage")
const giveUp_span = document.getElementById("quit")
const newGame_span = document.getElementById("new")
let endGameBool = false
let winGameBool = false


function winGame() {
    winGameBool = true
    strFont = "You Won! Nice Job!"
    result_p.innerHTML = strFont.fontcolor("green")
    alphabet.forEach(letter => document.getElementById(letter).innerHTML = "_ ")
}

resetBoard = () => {
    alphabet.forEach(letter => document.getElementById(letter).innerHTML = letter)
}


function adjustBoard(array1, wordArray) {
    if (!endGameBool && !winGameBool) {
        let output = ""
        for (let i = 0; i < wordArray.length; i++) {
            if (array1.includes(wordArray[i])) {
                output += wordArray[i] + " "
            } else {
                output += "_ "
            }
        }
        dashes_span.innerHTML = output
        output === correctGuess ? winGame() : result_p.innerHTML = "Nice guess!"
    }
}


function checkInWord(userChoice) {
    let tally = 0
    let wordArray = Array.from(word)
    for (let j = 0; j < wordArray.length; j++) {
        if (wordArray[j] === userChoice) {
            correctArray.push(wordArray[j])
            tally++
        }
    }
    if (tally > 0) {
        adjustBoard(correctArray, wordArray)
        return true
    }
    return false
}

function resetImage() {
    let filePath = "images/hang.png"
    hangImage_src.src = filePath
}


function changeImage(wrongGuess) {
    let filePath = "images/hang" + wrongGuess.toString() + ".png"
    // console.log(filePath)
    hangImage_src.src = filePath
    // console.log(hangImage_src)
}


function endGame() {
    let wordArray2 = Array.from(word)
    let outputs = ""
    for (let l = 0; l < wordArray2.length; l++) {
        if (alphabet.includes(wordArray2[l])) {
            outputs += wordArray2[l] + " "
        }
    }
    dashes_span.innerHTML = outputs
    endGameBool = true
    alphabet.forEach(letter => document.getElementById(letter).innerHTML = "_ ")
    result_p.innerHTML = "You're a quitter! Try again though."
}


function game(userChoice) {
    letter_span = document.getElementById(userChoice)
    if (!endGameBool && !winGameBool) {
        if (letter_span.innerHTML === "_") {
            result_p.innerHTML = `You've already guessed ${userChoice.fontcolor("orange")}, silly!`.fontcolor("red")
            return
        } else {
            letter_span.innerHTML = "_"
        }
        if (checkInWord(userChoice)) {
            return
        } else {
            wrongGuess++
            let guessesLeft = 7 - wrongGuess
            if (guessesLeft > 0) {
                result_p.innerHTML = `Wrong! Careful, you can only get ${guessesLeft} more wrong!`
                changeImage(wrongGuess, userChoice)
            }
            else if (guessesLeft === 0) {
                result_p.innerHTML = "You ran out of guesses! Play again!".fontcolor("red")
                endGame()
                hangImage_src.src = "images/end.png"
            }
        }
    } else {
        result_p.innerHTML = "Press 'New Game' :)"
    }
}


function setupGame() {
    let output = "_ "
    for (let i = 0; i < word.length - 1; i++) {
        output += "_ "
    }
    dashes_span.innerHTML = output
}


getWord = () => word = wordBank[Math.floor(Math.random() * wordBank.length)]

function setCorrectGuess() {
    let strConcat = ""
    for (let k = 0; k < word.length; k++) {
        strConcat += word[k] + " "
    }
    correctGuess = strConcat
}

init = () => {
    result_p.innerHTML = `Let's Play! There are ${wordBank.length} words in our word bank.`
    console.log(getWord())
    setCorrectGuess()
    setupGame()
    resetBoard()
    resetImage()
    endGameBool = false
    winGameBool = false
    wrongGuess = 1
}

function main() {
    init()
    if (!endGameBool && !winGameBool) {
        alphabet.forEach(letter => document.getElementById(letter).addEventListener('click', function () {
            game(letter)
        }))
        giveUp_span.addEventListener('click', function () {
            endGame()
        })
    }
}

main()