import XCTest
import SwiftTreeSitter
import TreeSitterIcalendar

final class TreeSitterIcalendarTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_icalendar())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading iCalendar grammar")
    }
}
