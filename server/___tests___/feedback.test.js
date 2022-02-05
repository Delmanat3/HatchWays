process.env.NODE_ENV = "test";
const Feedback = require("../app");
const db = require("../db/feedback.json");
const request = require("supertest");


describe("GET /api/feedback",  () => {
    it("It should respond with an Array of Objects ", async () => {
        const response = await request(Feedback).get("/api/feedback");
        expect(response.statusCode).toBe(200);
    })
})
describe("POST /api/feedback",  () => {
    it("It should respond with a feedback message", async () => {
        const newFeed = await request(Feedback)
        .post("/api/feedback")
        .send({
            
                "email": "me@me.com",
                "feedbackType": "jQuery",
                "feedback": "why u gotta gooooooo"
        });

        expect(newFeed.statusCode).toBe(200);
    });
  

});
describe("DELETE /api/feedback",  () => {
    it("It should respond with a feedback message", async () => {
        const newFeed = await request(Feedback)
        .delete("/api/feedback/36cb")
        expect(newFeed.statusCode).toBe(200);
    });
});
// this is the put route
describe("GET /api/feedback",  () => {
    it("It should update a feedback content", async () => {
        const newFeed = await request(Feedback)
        .get("/api/feedback/3fe5d166-2f9e-4e3d-87a7-25a561207c6c")
        .send({
            "email": "JohnAppleseed@2u.com",
            "feedbackType": "UI",
            "feedback": "insomnia is an enemy"
    });
        expect(newFeed.statusCode).toBe(200);
    });
  

});