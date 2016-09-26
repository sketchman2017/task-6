describe("Add to list page", function() {
    it("should add text to list using textfield and button", function() {
        browser.get("http://127.0.0.1:8000/");

        element(by.model("note")).sendKeys("Julie");
        element(by.css("#addnote")).click();

        var notes = element.all(by.repeater("note in notes track by $index"));
        expect(notes.count()).toEqual(1);
        expect(notes.first().getText()).toEqual("Julie");

        element(by.model("note")).sendKeys("Lucy");
        element(by.css("#addnote")).click();

        expect(notes.count()).toEqual(2);

        var first = notes.first().getText();
        var last = notes.last().getText();
        var notes_list = [];

        notes_list.push(first);
        notes_list.push(last);
        notes_list.sort();

        expect(notes_list[0]).toEqual("Julie");
        expect(notes_list[1]).toEqual("Lucy");
    });
});
