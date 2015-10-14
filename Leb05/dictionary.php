<!DOCTYPE html>
<html>
<head>
    <title>Dictionary</title>
    <meta charset="utf-8" />
    <link href="dictionary.css" type="text/css" rel="stylesheet" />
</head>
<body>
<div id="header">
    <h1>My Dictionary</h1>
<!-- Ex. 1: File of Dictionary -->
    <?php
        $filename = "dictionary.tsv";
        $lines = file($filename);
        $countLines=count($lines);
        $filesize=filesize($filename);
    ?>
    <p>
        My dictionary has <?= $countLines ?> total words
        and
        size of <?= $filesize ?>bytes.
    </p>

</div>
<div class="article">
    <div class="section">
        <h2>Today's words</h2>
<!-- Ex. 2: Today’s Words & Ex 6: Query Parameters -->
        <?php
            $numberOfWords;
            $todaysWords;
            function getWordsByNumber($listOfWords, $numberOfWords){
                $resultArray = array();
            
                explode("\t",$lines);
                shuffle($resultArray);
                return $resultArray;
            }
            $todaysWords=getWordsByNumber($line,$numberOfWords)
    
            

        ?>
        <ol>
            <li>Apple - An apple is a round fruit with smooth green, yellow, or red skin and firm white flesh.</li>
            <li>Computer - A computer is an electronic machine that can store and deal with large amounts of information.</li>
            <li>Graduate - A graduate is a person who has successfully completed a degree at a university or college and has received a certificate that shows this.</li>
        </ol>
    </div>
    <div class="section">
        <h2>Searching Words</h2>
<!-- Ex. 3: Searching Words & Ex 6: Query Parameters -->
        <?php
            function getWordsByCharacter($listOfWords, $startCharacter){
                $resultArray = array();
//                implement here.

                return $resultArray;
            }
            $startCharacter;
        ?>
        <p>
            Words that started by <strong>'C'</strong> are followings :
        </p>
        <ol>
            <li>Cherry - Cherries are small, round fruit with red skins.</li>
            <li>Computer - A computer is an electronic machine that can store and deal with large amounts of information.</li>
        </ol>
    </div>
    <div class="section">
        <h2>List of Words</h2>
<!-- Ex. 4: List of Words & Ex 6: Query Parameters -->
        <?php
            function getWordsByOrder($listOfWords, $orderby){
                $resultArray = $listOfWords;
                if($orderby==0){
                    sort($resultArray);
                }
                else if ($orderby==1) {
                    rsort($resultArray);
                }
                return $resultArray;
            }
        ?>
        <p>
            All of words ordered by <strong> alphabetical order  </strong> are followings :
        </p>

        <ol>
            <li class="long">Alphabet - An alphabet is a set of letters usually presented in a fixed order which is used for writing the words of a particular language or group of languages.</li>
            <li>Apple - An apple is a round fruit with smooth green, yellow, or red skin and firm white flesh.</li>
            <li>Banana - Bananas are long curved fruit with yellow skins.</li>
            <li>Cherry - Cherries are small, round fruit with red skins.</li>
            <li class="long">Computer - A computer is an electronic machine that can store and deal with large amounts of information.</li>
            <li class="long">Development - Development is the gradual growth or formation of something.</li>
            <li class="long">Graduate - A graduate is a person who has successfully completed a degree at a university or college and has received a certificate that shows this.</li>
        </ol>

    </div>
    <div class="section">
        <h2>Adding Words</h2>
<!-- Ex. 5: Adding Words & Ex 6: Query Parameters -->
        <p>Input word or meaning of the word doesn't exist.</p>
    </div>
</div>
<div id="footer">
    <a href="http://validator.w3.org/check/referer">
        <img src="http://selab.hanyang.ac.kr/courses/cse326/2015/problems/images/w3c-html.png" alt="Valid HTML5" />
    </a>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img src="http://selab.hanyang.ac.kr/courses/cse326/2015/problems/images/w3c-css.png" alt="Valid CSS" />
    </a>
</div>
</body>
</html>