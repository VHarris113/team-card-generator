const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can create new employee card", () => {
        const create = new Employee();
        expect(typeof(create).toBe("person")
    )});

    it("Name set via prompts", () => {
        const name = "Rocket";
        const create = new Employee(name);
        expect(create.name).toBe(name);
    });

    it("Set ID via prompts", () => {
        const testId = 1;
        const create = new Employee("a", id);
        expect(create.id).toBe(testId);
    });

    it("Set email via prompts", () => {
        const testEmail = "test@test.net";
        const create = new Employee()
    })

})
