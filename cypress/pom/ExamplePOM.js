class ExamplePOM {

    // Optional, but recommended if you need to provide values
    constructor(){}
    
    /*
        If you want to chain your methods, each method in ExamplePOM should return 'this':
        getSomething(){
            // your logic here...

            // then 
            return this
        }

        examplePom.getSomething()
                    .setSomething()
    */

    // methods
    getSomething(){
        expect(true).to.be.true
    }
    setSomething(myParam){
        expect(myParam).to.be.undefined
    }
}


export default ExamplePOM