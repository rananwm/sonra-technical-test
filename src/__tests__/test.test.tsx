import { getBooksAsync } from "../store/actions/booksAction";

test("test get data with pagination", () => {
  return getBooksAsync(20, "classic").then((data) => {
    expect(data?.items?.length).toBe(20);
  });
});


test("test get data", () => {
  return getBooksAsync(1, "classic").then((data) => {
    expect(data?.items?.length).toBe(20);
  });
});


test("test get data without query", () => {
  return getBooksAsync(1, "").then((data) => {
    expect(data?.items?.length).toBe(20);
  });
});


