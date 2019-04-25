const chai = require('chai');
const url = 'http://localhost:4000'
const request = require('supertest')(url);
const expect = chai.expect;
//DISCLAIMER: This works with a dtabase I filled, will not work without it
describe('Candy', () => {
    it('Returns Candy with fields for name search', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandy(cname: "Cr") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandy[0]).to.have.property('name')
            expect(res.body.data.findCandy[0]).to.have.property('tags')
            expect(res.body.data.findCandy[0]).to.have.property('links')
            done();
        })
    })

    it('Returns a single Candy for name search', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandy(cname: "Cr") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandy).to.have.lengthOf(1);
            done();
        })
    })

    it('Returns mulitple Candy for name search', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandy(cname: "C") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandy).to.have.lengthOf.above(2);
            done();
        })
    })

    it('Returns a Candy with a Chocolate Tag', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandybyTag(tag: "Chocolate") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandybyTag[0].tags[0]).to.equal("Dark Chocolate");
            done();
        })
    })

    it('Returns a Candy with a Chalky Tag', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandybyTag(tag: "Chalky") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandybyTag[0].tags[0]).to.equal("Chalky");;
            done();
        })
    })

    it('Returns Candy with fields for tag search', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandybyTag(tag: "Chocolate") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandybyTag[0]).to.have.property('name')
            expect(res.body.data.findCandybyTag[0]).to.have.property('tags')
            expect(res.body.data.findCandybyTag[0]).to.have.property('links')
            done();
        })
    })

    it('Returns mulitple Candy for tag search', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandybyTag(tag: "Chocolate") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandybyTag).to.have.lengthOf.above(2);
            done();
        })
    })

    it('Returns a single CORRECTLY named Candy for name search', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandy(cname: "Crunch") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandy[0].name).to.equal("Crunch Bar");
            done();
        })
    })

    it('Returns a single CORRECTLY named Candy for name search', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandy(cname: "Dark") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandy[0].name).to.equal("Dark Chocolate");
            done();
        })
    })

    it('Returns a single CORRECTLY named Candy for name search', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandy(cname: "White") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandy[0].name).to.equal("White Chocolate");
            done();
        })
    })

    it('Returns a single CORRECTLY named Candy for name search', (done) => {
        request.post('/graphql')
        .send({ query: '{ findCandy(cname: "Milk") { name tags links } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            expect(res.body.data.findCandy[0].name).to.equal("Milk Chocolate");
            done();
        })
    })

});