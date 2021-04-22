import Paginator from "./Paginator";
import { create } from "react-test-renderer"

describe("Describe paginator test", () => {
    test("pages count is 11 but should be showed only 10", () => {
        const component = create(<Paginator totalUsers={11} rowsPerPage={1} portionSize={10} />)
        const root = component.root
        let spans = root.findAllByType("li");
        expect(spans.length).toBe(10)
    })


})