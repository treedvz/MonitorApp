export class Billperiod {
    bper:Number;
    susp:Number;
    sche:Number;
    proc:Number;
    stop:Number;
    hold:Number;
    comp:Number;
    totl:Number;
    run:Boolean;

    constructor(bper:Number = 0) {
        this.bper = bper;
        this.susp = 0;
        this.sche = 0;
        this.proc = 0;
        this.stop = 0;
        this.hold = 0;
        this.comp = 0;
        this.totl = 0;
        this.run  = false;
    }
}

export class BPCon {
    currDate:Date;
    bps:Billperiod[];

    constructor() {
        this.currDate = new Date();
        this.bps = [];
        this.bps.push(new Billperiod(1));
        this.bps.push(new Billperiod(2));
        this.bps.push(new Billperiod(3));
        this.bps.push(new Billperiod(4));
        this.bps.push(new Billperiod(5));
        this.bps.push(new Billperiod(6));
        this.bps.push(new Billperiod(7));
        this.bps.push(new Billperiod(8));
        this.bps.push(new Billperiod(9));

        this.bps.push(new Billperiod(10));
        this.bps.push(new Billperiod(12));
        this.bps.push(new Billperiod(13));
        this.bps.push(new Billperiod(14));
        this.bps.push(new Billperiod(15));
        this.bps.push(new Billperiod(16));
        this.bps.push(new Billperiod(17));
        this.bps.push(new Billperiod(18));
        this.bps.push(new Billperiod(19));

        this.bps.push(new Billperiod(20));
        this.bps.push(new Billperiod(22));
        this.bps.push(new Billperiod(23));
        this.bps.push(new Billperiod(24));
        this.bps.push(new Billperiod(25));
        this.bps.push(new Billperiod(26));
        this.bps.push(new Billperiod(27));
        this.bps.push(new Billperiod(28));

    }

}