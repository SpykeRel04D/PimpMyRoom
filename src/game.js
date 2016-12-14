var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add('play', {
    preload: function() {

        this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();

        this.old = new Date();
        this.old = this.old.getTime();
        this.shopOpen = false;
        this.pimpOpen = false;

        //this.game.load.audio('bgmusic', 'assets/Sounds/BGMusic/bg.ogg');
        this.game.load.audio('bgmusic', ['assets/Sounds/BGMusic/bg.ogg', 'assets/Sounds/BGMusic/bg.mp3']);
        this.game.load.audio('buttonmusic', ['assets/Sounds/Button/button.ogg','assets/Sounds/Button/button.mp3']);
        this.game.load.audio('meteormusic', ['assets/Sounds/MeteorHit/meteor.ogg','assets/Sounds/MeteorHit/meteor.mp3']);
        this.game.load.audio('bikemusic', ['assets/Sounds/TheGoodOnes/bike.ogg','assets/Sounds/TheGoodOnes/bike.mp3']);
        this.game.load.audio('byemusic', ['assets/Sounds/TheGoodOnes/bye.ogg','assets/Sounds/TheGoodOnes/bye.mp3']);
        this.game.load.audio('olemusic', ['assets/Sounds/Upgrade/ole.ogg','assets/Sounds/Upgrade/ole.mp3']);
        this.game.load.audio('bulletmusic', ['assets/Sounds/Upgrade/bullet.ogg','assets/Sounds/Upgrade/bullet.mp3']);


        this.game.load.image('background','assets/background.png');
        this.game.load.image('popupbackground','assets/popupbackground.png')
        this.game.load.image('overpopupbackground','assets/overpopupbackground.png')
        this.game.load.image('cross','assets/x.png')
        this.game.load.image('pimp','assets/pimp.png');
        this.game.load.image('shop','assets/shop.png');
        this.game.load.image('up_click','assets/click.png')
        this.game.load.image('up_meteorite','assets/meteorupdate.png')
        this.game.load.image('meteorite01','assets/meteorite01.png');
        this.game.load.image('meteorite02','assets/meteorite02.png');
        this.game.load.image('meteorite03','assets/meteorite03.png');
        this.game.load.image('meteorite04','assets/meteorite04.png');
        this.game.load.image('meteorite05','assets/meteorite05.png');
        this.game.load.image('alfombra01','assets/alfombra01.png');
        this.game.load.image('alfombra02','assets/alfombra02.png');
        this.game.load.image('alfombra03','assets/alfombra03.png');
        this.game.load.image('alfombra04','assets/alfombra04.png');
        this.game.load.image('door01','assets/Door01.png');
        this.game.load.image('door02','assets/Door02.png');
        this.game.load.image('door03','assets/Door03.png');
        this.game.load.image('door04','assets/Door04.png');
        this.game.load.image('lampara01','assets/lampara01.png');
        this.game.load.image('lampara02','assets/lampara02.png');
        this.game.load.image('lampara03','assets/lampara03.png');
        this.game.load.image('lampara04','assets/lampara04.png');
        this.game.load.image('armari01','assets/Armari01.png');
        this.game.load.image('armari02','assets/Armari02.png');
        this.game.load.image('armari03','assets/Armari03.png');
        this.game.load.image('armari04','assets/Armari04.png');
        this.game.load.image('quadre01','assets/quadre01.png');
        this.game.load.image('quadre02','assets/quadre02.png');
        this.game.load.image('quadre03','assets/quadre03.png');
        this.game.load.image('quadre04','assets/quadre04.png');
        this.game.load.image('desk01','assets/Desk01.png');
        this.game.load.image('desk02','assets/Desk02.png');
        this.game.load.image('desk03','assets/Desk03.png');
        this.game.load.image('desk04','assets/Desk04.png');
        this.game.load.image('estanteria01','assets/estanteria01.png');
        this.game.load.image('estanteria02','assets/estanteria02.png');
        this.game.load.image('estanteria03','assets/estanteria03.png');
        this.game.load.image('estanteria04','assets/estanteria04.png');
        this.game.load.image('llit01','assets/llit01.png');
        this.game.load.image('llit02','assets/llit02.png');
        this.game.load.image('llit03','assets/llit03.png');
        this.game.load.image('llit04','assets/llit04.png');
        this.game.load.image('lampSostre01','assets/lamp01.png');
        this.game.load.image('lampSostre02','assets/lamp02.png');
        this.game.load.image('lampSostre03','assets/lamp03.png');
        this.game.load.image('lampSostre04','assets/lamp04.png');
        this.game.load.image('wall01','assets/wall01.png');
        this.game.load.image('wall02','assets/wall02.png');
        this.game.load.image('wall03','assets/wall03.png');
        this.game.load.image('wall04','assets/wall04.png');


        //Buttons load
        this.game.load.image('butt_alfombra','assets/butt_alfombra.png');
        this.game.load.image('butt_lampara','assets/butt_lampara.png');
        this.game.load.image('butt_quadre','assets/butt_quadre.png');
        this.game.load.image('butt_armari','assets/butt_armari.png');
        this.game.load.image('butt_door','assets/butt_porta.png');
        this.game.load.image('butt_desk','assets/butt_taula.png');
        this.game.load.image('butt_estanteria','assets/butt_estanteria.png');
        this.game.load.image('butt_llit','assets/butt_bed.png');
        this.game.load.image('butt_lampSostre','assets/butt_lamp.png');
        this.game.load.image('butt_wall','assets/butt_wall.png');



    },
    create: function() {
        var state = this;
        var needToLoadStorage = false;

        this.background = this.game.add.sprite(0,0,'background');

        this.music = this.game.add.audio('bgmusic');
        this.buttonM = this.game.add.audio('buttonmusic');
        this.meteorM = this.game.add.audio('meteormusic');
        this.bikeM = this.game.add.audio('bikemusic');
        this.byeM = this.game.add.audio('byemusic');
        this.oleM = this.game.add.audio('olemusic');
        this.bulletM = this.game.add.audio('bulletmusic');

        this.music.loop = true;
        this.music.play();

        this.player = {
            clicks: 1,              //DPS
            moneySec: 1,            //Money per second
            money: 1,             //Player money
        };

        // Buttons List (in Order)
        this.shopData = [
            {name: 'Carpet', base: 10, price: 10, level: 0, dps : 0, bdps:0.1, sprite: 'none', texture01: 'alfombra01', texture02: 'alfombra02', texture03: 'alfombra03', texture04: 'alfombra04'},
            {name: 'Painting', base: 67, price: 67, level: 0, dps : 0, bdps:1, sprite: 'none', texture01: 'quadre01', texture02: 'quadre02', texture03: 'quadre03', texture04: 'quadre04'},
            {name: 'Closet', base: 350, price: 350, level: 0, dps : 0, bdps:8, sprite: 'none', texture01: 'armari01', texture02: 'armari02', texture03: 'armari03', texture04: 'armari04'},
            {name: 'Lamp', base: 1800, price: 1800, level: 0, dps : 0, bdps:52, sprite: 'none', texture01: 'lampara01', texture02: 'lampara02', texture03: 'lampara03', texture04: 'lampara04'},
            {name: 'Door', base: 10350, price: 10350, level: 0, dps : 0, bdps:315, sprite: 'none', texture01: 'door01', texture02: 'door02', texture03: 'door03', texture04: 'door04'},
            {name: 'Desk', base: 66600, price: 66600, level: 0, dps : 0, bdps:1675, sprite: 'none', texture01: 'desk01', texture02: 'desk02', texture03: 'desk03', texture04: 'desk04'},
            {name: 'Rack', base: 350350, price: 350350, level: 0, dps : 0, bdps:7900, sprite: 'none', texture01: 'estanteria01', texture02: 'estanteria02', texture03: 'estanteria03', texture04: 'estanteria04'},
            {name: 'Bed', base: 1000000, price: 1000000, level: 0, dps : 0, bdps:51000, sprite: 'none', texture01: 'llit01', texture02: 'llit02', texture03: 'llit03', texture04: 'llit04'},
            {name: 'Ceiling Lamp', base: 5000000, price: 5000000, level: 0, bdps:312000, dps : 0, sprite: 'none', texture01: 'lampSostre01', texture02: 'lampSostre02', texture03: 'lampSostre03', texture04: 'lampSostre04'},
            {name: 'Wall', base: 150000000, price: 150000000, level: 0, dps : 0, bdps:2000000, sprite: 'none', texture01: 'wall01', texture02: 'wall02', texture03: 'wall03', texture04: 'wall04'},
        ];

        this.upClickData = {
            level: 1,
            price: 200,
            base: 200,
            name: 'Upgrade Click Value',
        };

        this.upMeteoriteData = {
            level: 1,
            price: 50,
            base: 50,
            name: 'Upgrade Meteorite Production',
        };

        if ( localStorage.money ){
            needToLoadStorage = true;
            this.player.money = parseFloat(localStorage.money);
            this.player.clicks = parseFloat(localStorage.clicks);
            this.player.moneySec = parseFloat(localStorage.moneySec);
            this.old = parseFloat(localStorage.old);
            this.shopData = JSON.parse(localStorage.furniture).map(function(i){
                if(i.level == 0){
                    i.sprite = state.game.add.sprite(0,0,i.texture01);
                    i.sprite.visible = false;
                }
                else if(i.level >= 30){
                    i.sprite = state.game.add.sprite(0,0,i.texture04);
                    i.sprite.visible = true;
                }
                else if(i.level >= 20){
                    i.sprite = state.game.add.sprite(0,0,i.texture03);
                    i.sprite.visible = true;
                }
                else if(i.level >= 10){
                    i.sprite = state.game.add.sprite(0,0,i.texture02);
                    i.sprite.visible = true;
                }
                else if(i.level >= 1){
                    i.sprite = state.game.add.sprite(0,0,i.texture01);
                    i.sprite.visible = true;
                }

                return i;});
        }
        else {
            for (var i=0; i<10; i++)
            {
                this.shopData[i].sprite = this.game.add.sprite(0,0,this.shopData[i].texture01);
                this.shopData[i].sprite.visible = false;
            }
        }

        this.moneyUI = this.game.add.text(575,13, 'Money: ' + Math.round(this.player.money).toExponential(2) + '$', {font: '22px Arial Black'});

        // Click meteorite
        this.meteorite = state.game.add.sprite(0, 0, 'meteorite01');
        this.meteorite.inputEnabled = true;
        this.meteorite.events.onInputDown.add(state.onClickableArea, state);

        if ( needToLoadStorage ){
            this.upMeteoriteData = JSON.parse(localStorage.meteorSave);
            this.upClickData = JSON.parse(localStorage.clickSave);

            if (this.upMeteoriteData.level >= 30) this.meteorite.loadTexture('meteorite05', 0, false);
            else if (this.upMeteoriteData.level >= 20) this.meteorite.loadTexture('meteorite04', 0, false);
            else if (this.upMeteoriteData.level >= 10) this.meteorite.loadTexture('meteorite03', 0, false);
            else if (this.upMeteoriteData.level >= 5) this.meteorite.loadTexture('meteorite02', 0, false);
        }

        this.clickTextPool = this.add.group();
        var clickText;
        for (var d=0; d<50; d++) {
            clickText = this.add.text(0, 0, '1', {
                font: '64px Arial Black',
                fill: '#ffffff',
                strokeThickness: 4
            });
            clickText.anchor.setTo(0.5,0.5);
            clickText.exists = false;
            clickText.tween = game.add.tween(clickText)
                .to({
                    alpha: 0,
                    y: 20,
                    x: 700
                }, 1000, Phaser.Easing.Cubic.Out);

            clickText.tween.onComplete.add(function(text, tween) {
                text.kill();
            });
            this.clickTextPool.add(clickText);
        }

        //Max Front Layer
        this.popupbackground = this.game.add.sprite(0,0,'popupbackground');
        this.popupbackground.visible = false;

        this.upClick = state.game.add.sprite(250,300,'up_click');
        this.upClick.anchor.setTo(0.5, 0.5);
        this.upClick.inputEnabled = true;
        this.upClick.visible = false;
        this.upClick.events.onInputDown.add(state.onUpClick, state);
        this.upClick.events.onInputOver.add(state.overUpClick, state);
        this.upClick.events.onInputOut.add(state.outUpClick, state);

        this.upClickUI = this.game.add.text(175,450, 'Price: ' + Math.round(this.upClickData.price).toExponential(2) + '$', {font: '22px Arial Black'});
        this.upClickUI.visible = false;

        this.upMeteorite = state.game.add.sprite(550,300,'up_meteorite');
        this.upMeteorite.anchor.setTo(0.5, 0.5);
        this.upMeteorite.inputEnabled = true;
        this.upMeteorite.visible = false;
        this.upMeteorite.events.onInputDown.add(state.onUpMeteor, state);
        this.upMeteorite.events.onInputOver.add(state.overUpMeteor, state);
        this.upMeteorite.events.onInputOut.add(state.outUpMeteor, state);

        this.upMeteoriteUI = this.game.add.text(475,450, 'Price: ' + Math.round(this.upMeteoriteData.price).toExponential(2) + '$', {font: '22px Arial Black'});
        this.upMeteoriteUI.visible = false;

        // Call Events
        this.dpsTimer = this.game.time.events.loop(1000, this.onDPS, this);
        this.saverData = this.game.time.events.loop(1000, this.saveData,this);

        var pimp = state.game.add.sprite(290,10, 'pimp');
        pimp.inputEnabled = true;
        pimp.events.onInputDown.add(state.onPimp, state);

        var shop = state.game.add.sprite(430,10, 'shop');
        shop.inputEnabled = true;
        shop.events.onInputDown.add(state.onShop, state);

        this.cross = state.game.add.sprite(640,95, 'cross');
        this.cross.inputEnabled = true;
        this.cross.events.onInputDown.add(state.onCross, state);
        this.cross.visible = false;

        // Buttons to buy furnitures
        this.buttonsPool = this.add.group();

        this.buttonAlfombra = state.game.add.sprite(180,200, 'butt_alfombra');
        this.buttonAlfombra.inputEnabled = true;
        this.buttonAlfombra.events.onInputDown.add(state.onBuyFurniture, state, 0, 0);
        this.buttonAlfombra.events.onInputOver.add(state.overBuyFurniture, state, 0, 0);
        this.buttonAlfombra.events.onInputOut.add(state.outBuyFurniture, state, 0, 0);
        this.alfombraText = this.game.add.text(160,270, 'Price: ' + Math.round(this.shopData[0].price).toExponential(2) + '$', {font: '11px Arial Black'});
        this.buttonsPool.add(this.buttonAlfombra);
        this.buttonsPool.add(this.alfombraText);

        this.buttonQuadre = state.game.add.sprite(280,200, 'butt_quadre');
        this.buttonQuadre.inputEnabled = true;
        this.buttonQuadre.events.onInputDown.add(state.onBuyFurniture, state, 0, 1);
        this.buttonQuadre.events.onInputOver.add(state.overBuyFurniture, state, 0, 1);
        this.buttonQuadre.events.onInputOut.add(state.outBuyFurniture, state, 0, 1);
        this.quadreText = this.game.add.text(260,270, 'Price: ' + Math.round(this.shopData[1].price).toExponential(2) + '$', {font: '11px Arial Black'});
        this.buttonsPool.add(this.buttonQuadre);
        this.buttonsPool.add(this.quadreText);

        this.buttonArmari = state.game.add.sprite(380,200, 'butt_armari');
        this.buttonArmari.inputEnabled = true;
        this.buttonArmari.events.onInputDown.add(state.onBuyFurniture, state, 0, 2);
        this.buttonArmari.events.onInputOver.add(state.overBuyFurniture, state, 0, 2);
        this.buttonArmari.events.onInputOut.add(state.outBuyFurniture, state, 0, 2);
        this.armariText = this.game.add.text(360,270, 'Price: ' + Math.round(this.shopData[2].price).toExponential(2) + '$', {font: '11px Arial Black'});
        this.buttonsPool.add(this.buttonArmari);
        this.buttonsPool.add(this.armariText);

        this.buttonLampara = state.game.add.sprite(480,200, 'butt_lampara');
        this.buttonLampara.inputEnabled = true;
        this.buttonLampara.events.onInputDown.add(state.onBuyFurniture, state, 0, 3);
        this.buttonLampara.events.onInputOver.add(state.overBuyFurniture, state, 0, 3);
        this.buttonLampara.events.onInputOut.add(state.outBuyFurniture, state, 0, 3);
        this.lamparaText = this.game.add.text(460,270, 'Price: ' + Math.round(this.shopData[3].price).toExponential(2) + '$', {font: '11px Arial Black'});
        this.buttonsPool.add(this.buttonLampara);
        this.buttonsPool.add(this.lamparaText);

        this.buttonDoor = state.game.add.sprite(580,200, 'butt_door');
        this.buttonDoor.inputEnabled = true;
        this.buttonDoor.events.onInputDown.add(state.onBuyFurniture, state, 0, 4);
        this.buttonDoor.events.onInputOver.add(state.overBuyFurniture, state, 0, 4);
        this.buttonDoor.events.onInputOut.add(state.outBuyFurniture, state, 0, 4);
        this.doorText = this.game.add.text(560,270, 'Price: ' + Math.round(this.shopData[4].price).toExponential(2) + '$', {font: '11px Arial Black'});
        this.buttonsPool.add(this.buttonDoor);
        this.buttonsPool.add(this.doorText);

        this.buttonDesk = state.game.add.sprite(180,320, 'butt_desk');
        this.buttonDesk.inputEnabled = true;
        this.buttonDesk.events.onInputDown.add(state.onBuyFurniture, state, 0, 5);
        this.buttonDesk.events.onInputOver.add(state.overBuyFurniture, state, 0, 5);
        this.buttonDesk.events.onInputOut.add(state.outBuyFurniture, state, 0, 5);
        this.deskText = this.game.add.text(160,390, 'Price: ' + Math.round(this.shopData[5].price).toExponential(2) + '$', {font: '11px Arial Black'});
        this.buttonsPool.add(this.buttonDesk);
        this.buttonsPool.add(this.deskText);

        this.buttonEstanteria = state.game.add.sprite(280,320, 'butt_estanteria');
        this.buttonEstanteria.inputEnabled = true;
        this.buttonEstanteria.events.onInputDown.add(state.onBuyFurniture, state, 0, 6);
        this.buttonEstanteria.events.onInputOver.add(state.overBuyFurniture, state, 0, 6);
        this.buttonEstanteria.events.onInputOut.add(state.outBuyFurniture, state, 0, 6);
        this.estanteriaText = this.game.add.text(260,390, 'Price: ' + Math.round(this.shopData[6].price).toExponential(2) + '$', {font: '11px Arial Black'});
        this.buttonsPool.add(this.buttonEstanteria);
        this.buttonsPool.add(this.estanteriaText);

        this.buttonLlit = state.game.add.sprite(380,320, 'butt_llit');
        this.buttonLlit.inputEnabled = true;
        this.buttonLlit.events.onInputDown.add(state.onBuyFurniture, state, 0, 7);
        this.buttonLlit.events.onInputOver.add(state.overBuyFurniture, state, 0, 7);
        this.buttonLlit.events.onInputOut.add(state.outBuyFurniture, state, 0, 7);
        this.llitText = this.game.add.text(360,390, 'Price: ' + Math.round(this.shopData[7].price).toExponential(2) + '$', {font: '11px Arial Black'});
        this.buttonsPool.add(this.buttonLlit);
        this.buttonsPool.add(this.llitText);

        this.buttonLampSostre = state.game.add.sprite(480,320, 'butt_lampSostre');
        this.buttonLampSostre.inputEnabled = true;
        this.buttonLampSostre.events.onInputDown.add(state.onBuyFurniture, state, 0, 8);
        this.buttonLampSostre.events.onInputOver.add(state.overBuyFurniture, state, 0, 8);
        this.buttonLampSostre.events.onInputOut.add(state.outBuyFurniture, state, 0, 8);
        this.lampSostreText = this.game.add.text(460,390, 'Price: ' + Math.round(this.shopData[8].price).toExponential(2) + '$', {font: '11px Arial Black'});
        this.buttonsPool.add(this.buttonLampSostre);
        this.buttonsPool.add(this.lampSostreText);

        this.buttonWall = state.game.add.sprite(580,320, 'butt_wall');
        this.buttonWall.inputEnabled = true;
        this.buttonWall.events.onInputDown.add(state.onBuyFurniture, state, 0, 9);
        this.buttonWall.events.onInputOver.add(state.overBuyFurniture, state, 0, 9);
        this.buttonWall.events.onInputOut.add(state.outBuyFurniture, state, 0, 9);
        this.wallText = this.game.add.text(560,390, 'Price: ' + Math.round(this.shopData[9].price).toExponential(2) + '$', {font: '11px Arial Black'});
        this.buttonsPool.add(this.buttonWall);
        this.buttonsPool.add(this.wallText);

        this.buttonsPool.visible = false;

        this.overPool = this.add.group();
        this.overpopupbackground = this.game.add.sprite(0,0,'overpopupbackground');
        this.overName = this.game.add.text(230,265, 'Name: ' + 'none', {font: '16px Arial Black'});
        this.overLevel = this.game.add.text(230,290, 'Level: ' + 'none', {font: '16px Arial Black'});
        this.overProduce = this.game.add.text(230,315, 'Produce: ' + 'none', {font: '16px Arial Black'});

        this.overPool.add(this.overpopupbackground);
        this.overPool.add(this.overName);
        this.overPool.add(this.overLevel);
        this.overPool.add(this.overProduce);
        this.overPool.visible = false;

    },
    onDPS: function() {
        this.player.money += this.player.moneySec;
        for (var i=0; i<10; i++)
        {
            this.player.money += this.shopData[i].dps;
        }

        this.moneyUI.text = 'Money: ' + Math.round(this.player.money).toExponential(2) + '$';

        if (this.upMeteoriteData.price > this.player.money) this.upMeteoriteUI.fill = '#6E6E6E';
        else this.upMeteoriteUI.fill = '#000000';

        if (this.upClickData.price > this.player.money) this.upClickUI.fill = '#6E6E6E';
        else this.upClickUI.fill = '#000000';

        if (this.shopData[0].price > this.player.money) this.alfombraText.fill = '#6E6E6E';
        else this.alfombraText.fill = '#000000';

        if (this.shopData[1].price > this.player.money) this.quadreText.fill = '#6E6E6E';
        else this.quadreText.fill = '#000000';

        if (this.shopData[2].price > this.player.money) this.armariText.fill = '#6E6E6E';
        else this.armariText.fill = '#000000';

        if (this.shopData[3].price > this.player.money) this.lamparaText.fill = '#6E6E6E';
        else this.lamparaText.fill = '#000000';

        if (this.shopData[4].price > this.player.money) this.doorText.fill = '#6E6E6E';
        else this.doorText.fill = '#000000';

        if (this.shopData[5].price > this.player.money) this.deskText.fill = '#6E6E6E';
        else this.deskText.fill = '#000000';

        if (this.shopData[6].price > this.player.money) this.estanteriaText.fill = '#6E6E6E';
        else this.estanteriaText.fill = '#000000';

        if (this.shopData[7].price > this.player.money) this.llitText.fill = '#6E6E6E';
        else this.llitText.fill = '#000000';

        if (this.shopData[8].price > this.player.money) this.lampSostreText.fill = '#6E6E6E';
        else this.lampSostreText.fill = '#000000';

        if (this.shopData[9].price > this.player.money) this.wallText.fill = '#6E6E6E';
        else this.wallText.fill = '#000000';
    },
    saveData: function() {
        var now = new Date();
        var difference = (now.getTime() - this.old) / 1000;
        if (difference >= 5) {
            console.log(Math.round(difference));
            this.player.money = this.player.money + (Math.round(difference) * this.player.moneySec * 10);
        }
        this.old = new Date();
        this.old = this.old.getTime();
        localStorage.money = this.player.money;
        console.log('Normal Money: ' + this.player.money + ' - Storage: ' + localStorage.money);
        console.log('Test shopData prices, Carpet: ' + this.shopData[0].price + ' - Storage: ' + localStorage.furniture[0].price);
        localStorage.clicks = this.player.clicks;
        localStorage.moneySec = this.player.moneySec;
        localStorage.furniture = JSON.stringify(this.shopData.map(function(i){ return {name: i.name, base: i.base, price: i.price, level: i.level, dps : i.dps, texture01: i.texture01, texture02: i.texture02, texture03: i.texture03, texture04: i.texture04}} ));
        localStorage.meteorSave = JSON.stringify(this.upMeteoriteData);
        localStorage.clickSave = JSON.stringify(this.upClickData);
        localStorage.old = this.old;
    },
    onClickableArea: function(meteorite, pointer) {
        this.meteorM.play();
        this.player.money += this.player.clicks;
        this.moneyUI.text = 'Money: ' + Math.round(this.player.money).toExponential(2) + '$';

        var clickText = this.clickTextPool.getFirstExists(false);
        if (clickText) {
            clickText.text = this.player.clicks;
            clickText.reset(pointer.positionDown.x, pointer.positionDown.y);
            clickText.alpha = 1;
            clickText.tween.start();
        }
    },
    onPimp: function(pimp, pointer) {
        this.buttonM.play();
        if (this.shopOpen == true){
          this.meteorite.inputEnabled = true;
          this.popupbackground.visible = false;
          this.cross.visible = false;
          this.upClick.visible = false;
          this.upMeteorite.visible = false;
          this.upClickUI.visible = false;
          this.upMeteoriteUI.visible = false;
          this.buttonsPool.visible = false;
          this.shopOpen = false;
        }
        this.pimpOpen = true;
        this.meteorite.inputEnabled = false;
        this.popupbackground.visible = true;
        this.cross.visible = true;
        this.upClick.visible = true;
        this.upMeteorite.visible = true;
        this.upClickUI.visible = true;
        this.upMeteoriteUI.visible = true;
    },
    onShop: function(shop, pointer) {
        this.buttonM.play();
        if (this.pimpOpen == true){
          this.meteorite.inputEnabled = true;
          this.popupbackground.visible = false;
          this.cross.visible = false;
          this.upClick.visible = false;
          this.upMeteorite.visible = false;
          this.upClickUI.visible = false;
          this.upMeteoriteUI.visible = false;
          this.buttonsPool.visible = false;
          this.pimpOpen = false;
        }
        this.shopOpen = true;
        this.meteorite.inputEnabled = false;
        this.popupbackground.visible = true;
        this.cross.visible = true;
        this.buttonsPool.visible = true;
    },
    onCross: function(cross, pointer) {
        this.bikeM.play();
        this.shopOpen = false;
        this.pimpOpen = false;
        this.meteorite.inputEnabled = true;
        this.popupbackground.visible = false;
        this.cross.visible = false;
        this.upClick.visible = false;
        this.upMeteorite.visible = false;
        this.upClickUI.visible = false;
        this.upMeteoriteUI.visible = false;
        this.buttonsPool.visible = false;
    },
    onUpClick: function(upClick, pointer) {
        if (this.player.money >= this.upClickData.price) {
            this.oleM.play();
            this.player.money = this.player.money - this.upClickData.price;
            this.player.clicks += 2;
            this.upClickData.level += 1;
            this.upClickData.price = this.upClickData.base * Math.pow(1.15 , this.upClickData.level)

            this.upClickUI.text = 'Price: ' + Math.round(this.upClickData.price).toExponential(2) + '$';

            if (this.upClickData.level == 10) clickText.fill = '#33ccff';
            if (this.upClickData.level == 19) clickText.fill = '#ff0000';
            if (this.upClickData.level == 29) clickText.fill = '#00ff00';
            if (this.upClickData.level == 39) clickText.fill = '#ffff00';
        }
    },
    overUpClick: function(furniture, pointer) {
        this.overName.text='Name: ' + this.upClickData.name;
        this.overLevel.text='Level: ' + this.upClickData.level;
        this.overProduce.text='Click Value: ' + this.player.clicks;
        this.overPool.visible = true;
        this.overPool.x = 160;
    },
    outUpClick: function(furniture, pointer) {
        this.overPool.visible = false;
        this.overPool.x = 0;
    },
    onUpMeteor: function(upMeteorite, pointer) {
        if (this.player.money >= this.upMeteoriteData.price) {
            this.oleM.play();
            this.player.money = this.player.money - this.upMeteoriteData.price;
            this.player.moneySec += 1;
            this.upMeteoriteData.level += 1;
            this.upMeteoriteData.price = this.upMeteoriteData.base * Math.pow(1.15 , this.upMeteoriteData.level)

            this.upMeteoriteUI.text = 'Price: ' + Math.round(this.upMeteoriteData.price).toExponential(2) + '$';

            if (this.upMeteoriteData.level == 5) this.meteorite.loadTexture('meteorite02', 0, false);
            if (this.upMeteoriteData.level == 10) this.meteorite.loadTexture('meteorite03', 0, false);
            if (this.upMeteoriteData.level == 20) this.meteorite.loadTexture('meteorite04', 0, false);
            if (this.upMeteoriteData.level == 30) this.meteorite.loadTexture('meteorite05', 0, false);
        }
    },
    overUpMeteor: function(furniture, pointer) {
        this.overName.text='Name: ' + this.upMeteoriteData.name;
        this.overLevel.text='Level: ' + this.upMeteoriteData.level;
        this.overProduce.text='Produce: ' + Math.round(this.player.moneySec).toExponential(2);
        this.overPool.visible = true;
        this.overPool.x = -160;
    },
    outUpMeteor: function(furniture, pointer) {
        this.overPool.visible = false;
        this.overPool.x = 0;
    },
    onBuyFurniture: function(furniture, pointer, param) {
        if (this.player.money >= this.shopData[param].price) {
            this.bulletM.play();
            this.player.money = this.player.money - this.shopData[param].price;
            this.shopData[param].level += 1;
            this.shopData[param].dps += this.shopData[param].bdps;
            this.shopData[param].price = this.shopData[param].base * Math.pow(1.15 , this.shopData[param].level)

            // Update all prices
            this.alfombraText.text = 'Price: ' + Math.round(this.shopData[0].price).toExponential(2) + '$';
            this.quadreText.text = 'Price: ' + Math.round(this.shopData[1].price).toExponential(2) + '$';
            this.armariText.text = 'Price: ' + Math.round(this.shopData[2].price).toExponential(2) + '$';
            this.lamparaText.text = 'Price: ' + Math.round(this.shopData[3].price).toExponential(2) + '$';
            this.doorText.text = 'Price: ' + Math.round(this.shopData[4].price).toExponential(2) + '$';
            this.deskText.text = 'Price: ' + Math.round(this.shopData[5].price).toExponential(2) + '$';
            this.estanteriaText.text = 'Price: ' + Math.round(this.shopData[6].price).toExponential(2) + '$';
            this.llitText.text = 'Price: ' + Math.round(this.shopData[7].price).toExponential(2) + '$';
            this.lampSostreText.text = 'Price: ' + Math.round(this.shopData[8].price).toExponential(2) + '$';
            this.wallText.text = 'Price: ' + Math.round(this.shopData[9].price).toExponential(2) + '$';
        }

        if (this.shopData[param].level == 1) this.shopData[param].sprite.visible = true;
        if (this.shopData[param].level == 10) this.shopData[param].sprite.loadTexture(this.shopData[param].texture02, 0, false);
        if (this.shopData[param].level == 20) this.shopData[param].sprite.loadTexture(this.shopData[param].texture03, 0, false);
        if (this.shopData[param].level == 30) this.shopData[param].sprite.loadTexture(this.shopData[param].texture04, 0, false);
    },
    overBuyFurniture: function(furniture, pointer, param) {
        this.overName.text='Name: ' + this.shopData[param].name;
        this.overLevel.text='Level: ' + this.shopData[param].level;
        this.overProduce.text='Produce: ' + Math.round(this.shopData[param].dps).toExponential(2);
        this.overPool.y = 165;
        this.overPool.visible = true;
    },
    outBuyFurniture: function(furniture, pointer, param) {
        this.overPool.y = 0;
        this.overPool.visible = false;
    },
});

game.state.start('play');
