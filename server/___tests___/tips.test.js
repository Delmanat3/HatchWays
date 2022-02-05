process.env.NODE_ENV = "test";
const Tips = require("../app");
const request = require("supertest");
const {
    TestScheduler
} = require("jest");


describe("GET /api/tips",  () => {
    it("It should respond with an Array of Objects ", async () => {
        const response = await request(Tips).get("/api/tips");
        expect(response.statusCode).toBe(200);
    })
})
describe("POST /api/tips",  () => {
    it("It should respond with a feedback message", async () => {
        const newFeed = await request(Tips)
        .post("/api/tips")
        .send({
            
            
                "username": "5",
                "topic": "UX",
                "tip": "Don't use comic sans"
                
            
        });

        expect(newFeed.statusCode).toBe(200);
    });
  

});