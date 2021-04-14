const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can create new employee card", () => {
        const c = new Employee();
        expect(typeof(c).toBe("object")
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
        const create = new Employee();
        expect(create.testEmail).toBe(testEmail);
    })

    test("getRole() should return \"Employee\"", () => {
        const testValue = "Employee";
        const e = new Employee("Rocket", 1, "test@test.com");
        expect(e.getRole()).toBe(testValue);
    })
})
