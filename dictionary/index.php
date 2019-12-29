<?PHP
//header('Content-Type: application/json');
require_once 'lib/unirest-php/src/Unirest.php';
require_once 'lib/wordnik-php/wordnik/Swagger.php';
$wordsapiKey = "e0c18450b6msh7988aa5b2ea2785p13a5bcjsncfbed800ab13";
$wordnikKey = "5s28h7eg8kdb1jr9tb44imr2icj04cvczs7gs3wxzw8w4z0m0";
$word = "circular";
$client = new APIClient($wordnikKey, 'http://api.wordnik.com/v4');
$wordApi = new WordApi($client);
$example = $wordApi->getRelatedWords($word, "same-context", null, 100);

print("<pre>");
print_r($example);
print("</pre>");
echo $word . "<br>";
foreach ($example[0]->words as $val){
    echo $val . "<br>";
}
//print_r($audio);
//$wordsapiResponse = Unirest\Request::get("https://wordsapiv1.p.rapidapi.com/words/$word",
//    array(
//        "X-RapidAPI-Host" => "wordsapiv1.p.rapidapi.com",
//        "X-RapidAPI-Key" => $wordsapiKey
//    )
//);
//
//$wordnikResponse = Unirest\Request::get("https://api.wordnik.com/v4/word.json/$word/definitions?limit=200&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=$wordnikKey");
//
////$responseArray = "{$wordsapiResponse->raw_body, $wordnikResponse->raw_body}";
//$responseJSON = null;
//$responseJSON->wordsapi = $wordsapiResponse->body;
//$responseJSON->wordnik = $wordnikResponse->body;
//
//$encodedResponse = json_encode($responseJSON);
//
//echo $encodedResponse;
