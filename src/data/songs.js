const songs = [{id: 1, title: "ANYTHING IS POSSIBLE/EVERGREEN", artist: "WILL YOUNG"},
{id: 2, title: "SOMEONE LIKE YOU", artist: "ADELE"},
{id: 3, title: "UNCHAINED MELODY", artist: "GARETH GATES"},
{id: 4, title: "I GOTTA FEELING", artist: "BLACK EYED PEAS"},
{id: 5, title: "IT WASN'T ME", artist: "SHAGGY FT RIKROK"},
{id: 6, title: "MOVES LIKE JAGGER", artist: "MAROON 5 FT CHRISTINA AGUILERA"},
{id: 7, title: "(IS THIS THE WAY TO) AMARILLO", artist: "TONY CHRISTIE FT PETER KAY"},
{id: 8, title: "HALLELUJAH", artist: "ALEXANDRA BURKE"},
{id: 9, title: "SEX ON FIRE", artist: "KINGS OF LEON"},
{id: 10, title: "DO THEY KNOW IT'S CHRISTMAS", artist: "BAND AID 20"},
{id: 11, title: "CAN'T GET YOU OUT OF MY HEAD", artist: "KYLIE MINOGUE"},
{id: 12, title: "JUST THE WAY YOU ARE (AMAZING)", artist: "BRUNO MARS"},
{id: 13, title: "WE FOUND LOVE", artist: "RIHANNA FT CALVIN HARRIS"},
{id: 14, title: "POKER FACE", artist: "LADY GAGA"},
{id: 15, title: "THAT'S MY GOAL", artist: "SHAYNE WARD"},
{id: 16, title: "PARTY ROCK ANTHEM", artist: "LMFAO/LAUREN BENNETT/GOONROCK"},
{id: 17, title: "PURE AND SIMPLE", artist: "HEARSAY"},
{id: 18, title: "PRICE TAG", artist: "JESSIE J FT BOB"},
{id: 19, title: "LOVE THE WAY YOU LIE", artist: "EMINEM FT RIHANNA"},
{id: 20, title: "ONLY GIRL (IN THE WORLD)", artist: "RIHANNA"},
{id: 21, title: "BLEEDING LOVE", artist: "LEONA LEWIS"},
{id: 22, title: "CRAZY", artist: "GNARLS BARKLEY"},
{id: 23, title: "CAN WE FIX IT", artist: "BOB THE BUILDER"},
{id: 24, title: "WHEN WE COLLIDE", artist: "MATT CARDLE"},
{id: 25, title: "FIGHT FOR THIS LOVE", artist: "CHERYL COLE"},
{id: 26, title: "WHOLE AGAIN", artist: "ATOMIC KITTEN"},
{id: 27, title: "BAD ROMANCE", artist: "LADY GAGA"},
{id: 28, title: "HERO", artist: "ENRIQUE IGLESIAS"},
{id: 29, title: "GIVE ME EVERYTHING", artist: "PITBULL/NE-YO/AFROJACK/NAYER"},
{id: 30, title: "SOMEBODY THAT I USED TO KNOW", artist: "GOTYE FT KIMBRA"},
{id: 31, title: "JUST DANCE", artist: "LADY GAGA"},
{id: 32, title: "USE SOMEBODY", artist: "KINGS OF LEON"},
{id: 33, title: "FORGET YOU", artist: "CEE LO GREEN"},
{id: 34, title: "THE A TEAM", artist: "ED SHEERAN"},
{id: 35, title: "A MOMENT LIKE THIS", artist: "LEONA LEWIS"},
{id: 36, title: "ROLLING IN THE DEEP", artist: "ADELE"},
{id: 37, title: "GRENADE", artist: "BRUNO MARS"},
{id: 38, title: "CHASING CARS", artist: "SNOW PATROL"},
{id: 39, title: "RULE THE WORLD", artist: "TAKE THAT"},
{id: 40, title: "DON'T STOP BELIEVIN'", artist: "JOURNEY"},
{id: 41, title: "FIREWORK", artist: "KATY PERRY"},
{id: 42, title: "STAN", artist: "EMINEM"},
{id: 43, title: "HERO", artist: "X FACTOR FINALISTS"},
{id: 44, title: "ON THE FLOOR", artist: "JENNIFER LOPEZ FT PITBULL"},
{id: 45, title: "MEET ME HALFWAY", artist: "BLACK EYED PEAS"},
{id: 46, title: "DILEMMA", artist: "NELLY FT KELLY ROWLAND"},
{id: 47, title: "THE CLIMB", artist: "JOE MCELDERRY"},
{id: 48, title: "JAR OF HEARTS", artist: "CHRISTINA PERRI"},
{id: 49, title: "MAKE YOU FEEL MY LOVE", artist: "ADELE"},
{id: 50, title: "IN FOR THE KILL", artist: "LA ROUX"},
{id: 51, title: "PASS OUT", artist: "TINIE TEMPAH"},
{id: 52, title: "WHAT'S MY NAME", artist: "RIHANNA FT DRAKE"},
{id: 53, title: "UMBRELLA", artist: "RIHANNA FT JAY-Z"},
{id: 54, title: "HEY BABY", artist: "DJ OTZI"},
{id: 55, title: "PARADISE", artist: "COLDPLAY"},
{id: 56, title: "UPTOWN GIRL", artist: "WESTLIFE"},
{id: 57, title: "DON'T STOP MOVIN'", artist: "S CLUB 7"},
{id: 58, title: "LOSE YOURSELF", artist: "EMINEM"},
{id: 59, title: "PURE SHORES", artist: "ALL SAINTS"},
{id: 60, title: "WE NO SPEAK AMERICANO", artist: "YOLANDA BE COOL VS D CUP"},
{id: 61, title: "TEENAGE DIRTBAG", artist: "WHEATUS"},
{id: 62, title: "CALIFORNIA GURLS", artist: "KATY PERRY FT SNOOP DOGG"},
{id: 63, title: "TITANIUM", artist: "DAVID GUETTA FT SIA"},
{id: 64, title: "RUN", artist: "LEONA LEWIS"},
{id: 65, title: "OMG", artist: "USHER FT WILL I AM"},
{id: 66, title: "BAD BOYS", artist: "ALEXANDRA BURKE FT FLO RIDA"},
{id: 67, title: "WHO LET THE DOGS OUT", artist: "BAHA MEN"},
{id: 68, title: "EARTHQUAKE", artist: "LABRINTH FT TINIE TEMPAH"},
{id: 69, title: "FIREFLIES", artist: "OWL CITY"},
{id: 70, title: "KILLING IN THE NAME", artist: "RAGE AGAINST THE MACHINE"},
{id: 71, title: "AIRPLANES", artist: "BOB FT HAYLEY WILLIAMS"},
{id: 72, title: "SEXY AND I KNOW IT", artist: "LMFAO"},
{id: 73, title: "BOOM BOOM POW", artist: "BLACK EYED PEAS"},
{id: 74, title: "WHEREVER YOU ARE", artist: "MILITARY WIVES/GARETH MALONE"},
{id: 75, title: "YOU'RE BEAUTIFUL", artist: "JAMES BLUNT"},
{id: 76, title: "EMPIRE STATE OF MIND", artist: "JAY-Z FT ALICIA KEYS"},
{id: 77, title: "YOUR SONG", artist: "ELLIE GOULDING"},
{id: 78, title: "MAD WORLD", artist: "MICHAEL ANDREWS FT GARY JULES"},
{id: 79, title: "EMPIRE STATE OF MIND (PART II)", artist: "ALICIA KEYS"},
{id: 80, title: "IF I WERE A BOY", artist: "BEYONCE"},
{id: 81, title: "WHERE IS THE LOVE", artist: "BLACK EYED PEAS"},
{id: 82, title: "SEXY CHICK", artist: "DAVID GUETTA FT AKON"},
{id: 83, title: "WHENEVER WHEREVER", artist: "SHAKIRA"},
{id: 84, title: "S&M", artist: "RIHANNA"},
{id: 85, title: "IT FEELS SO GOOD", artist: "SONIQUE"},
{id: 86, title: "DYNAMITE", artist: "TAIO CRUZ"},
{id: 87, title: "HIPS DON'T LIE", artist: "SHAKIRA FT WYCLEF JEAN"},
{id: 88, title: "BROKEN STRINGS", artist: "JAMES MORRISON/NELLY FURTADO"},
{id: 89, title: "ROCKSTAR", artist: "NICKELBACK"},
{id: 90, title: "TELEPHONE", artist: "LADY GAGA FT BEYONCE"},
{id: 91, title: "I KISSED A GIRL", artist: "KATY PERRY"},
{id: 92, title: "WHAT MAKES YOU BEAUTIFUL", artist: "ONE DIRECTION"},
{id: 93, title: "HUMAN", artist: "KILLERS"},
{id: 94, title: "BORN THIS WAY", artist: "LADY GAGA"},
{id: 95, title: "PATIENCE", artist: "TAKE THAT"},
{id: 96, title: "THE TIME (DIRTY BIT)", artist: "BLACK EYED PEAS"},
{id: 97, title: "MERCY", artist: "DUFFY"},
{id: 98, title: "SOUND OF THE UNDERGROUND", artist: "GIRLS ALOUD"},
{id: 99, title: "ROCK DJ", artist: "ROBBIE WILLIAMS"},
{id: 100, title: "TIK TOK", artist: "KESHA"},
{id: 101, title: "HOT N COLD", artist: "KATY PERRY"},
{id: 102, title: "THE LAZY SONG", artist: "BRUNO MARS"},
{id: 103, title: "GOOD FEELING", artist: "FLO RIDA"},
{id: 104, title: "SHE SAID", artist: "PLAN B"},
{id: 105, title: "NEVER HAD A DREAM COME TRUE", artist: "S CLUB 7"},
{id: 106, title: "NUMBER 1", artist: "TINCHY STRYDER FT N-DUBZ"},
{id: 107, title: "SINGLE LADIES (PUT A RING ON IT)", artist: "BEYONCE"},
{id: 108, title: "A LITTLE LESS CONVERSATION", artist: "ELVIS VS JXL"},
{id: 109, title: "RUDE BOY", artist: "RIHANNA"},
{id: 110, title: "BEAUTIFUL PEOPLE", artist: "CHRIS BROWN FT BENNY BENASSI"},
{id: 111, title: "VIVA LA VIDA", artist: "COLDPLAY"},
{id: 112, title: "I NEED A DOLLAR", artist: "ALOE BLACC"},
{id: 113, title: "LOW", artist: "FLO RIDA FT T-PAIN"},
{id: 114, title: "EVERYBODY HURTS", artist: "HELPING HAITI"},
{id: 115, title: "FAIRYTALE OF NEW YORK", artist: "POGUES FT KIRSTY MACCOLL"},
{id: 116, title: "DOMINO", artist: "JESSIE J"},
{id: 117, title: "CAN'T FIGHT THE MOONLIGHT", artist: "LEANN RIMES"},
{id: 118, title: "CHANGED THE WAY YOU KISS ME", artist: "EXAMPLE"},
{id: 119, title: "GROOVEJET (IF THIS AIN'T LOVE)", artist: "SPILLER"},
{id: 120, title: "YOU'VE GOT THE LOVE", artist: "FLORENCE & THE MACHINE"},
{id: 121, title: "THE KETCHUP SONG (ASEREJE)", artist: "LAS KETCHUP"},
{id: 122, title: "WHEN LOVE TAKES OVER", artist: "DAVID GUETTA FT KELLY ROWLAND"},
{id: 123, title: "BONKERS", artist: "DIZZEE RASCAL/VAN HELDEN"},
{id: 124, title: "VALERIE", artist: "MARK RONSON FT AMY WINEHOUSE"},
{id: 125, title: "F**K IT (I DON'T WANT YOU BACK)", artist: "EAMON"},
{id: 126, title: "HEAVEN", artist: "DJ SAMMY & YANOU FT DO"},
{id: 127, title: "WRITTEN IN THE STARS", artist: "TINIE TEMPAH FT ERIC TURNER"},
{id: 128, title: "LEGO HOUSE", artist: "ED SHEERAN"},
{id: 129, title: "DO IT LIKE A DUDE", artist: "JESSIE J"},
{id: 130, title: "LEAVE RIGHT NOW", artist: "WILL YOUNG"},
{id: 131, title: "ANGEL", artist: "SHAGGY FT RAYVON"},
{id: 132, title: "WITHOUT ME", artist: "EMINEM"},
{id: 133, title: "I'M YOURS", artist: "JASON MRAZ"},
{id: 134, title: "DANCE WIV ME", artist: "DIZZEE RASCAL/HARRIS/CHROME"},
{id: 135, title: "HALO", artist: "BEYONCE"},
{id: 136, title: "HUNG UP", artist: "MADONNA"},
{id: 137, title: "HEART SKIPS A BEAT", artist: "OLLY MURS FT RIZZLE KICKS"},
{id: 138, title: "IRIS", artist: "GOO GOO DOLLS"},
{id: 139, title: "GRACE KELLY", artist: "MIKA"},
{id: 140, title: "DANCE WITH ME TONIGHT", artist: "OLLY MURS"},
{id: 141, title: "SWEAT", artist: "SNOOP DOGG"},
{id: 142, title: "I DON'T FEEL LIKE DANCIN'", artist: "SCISSOR SISTERS"},
{id: 143, title: "AMERICAN BOY", artist: "ESTELLE FT KANYE WEST"},
{id: 144, title: "ANYONE OF US (STUPID MISTAKE)", artist: "GARETH GATES"},
{id: 145, title: "THE MAN WHO CAN'T BE MOVED", artist: "SCRIPT"},
{id: 146, title: "IGNITION REMIX", artist: "R KELLY"},
{id: 147, title: "DON'T CHA", artist: "PUSSYCAT DOLLS FT BUSTA RHYMES"},
{id: 148, title: "PAPARAZZI", artist: "LADY GAGA"},
{id: 149, title: "APOLOGIZE", artist: "TIMBALAND PTS ONEREPUBLIC"},
{id: 150, title: "AXEL F", artist: "CRAZY FROG"}]

export default songs
