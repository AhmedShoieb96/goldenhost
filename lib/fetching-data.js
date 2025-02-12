//  handle parameters to be dynamic in mmy URL

const parameters = [
  "start_date",
  "end_date",
  "price_from",
  "price_to",
  "offer",
  "category[]",
  "city",
  "rooms_no",
  "rent_by_hour",
];

export function handleParams(params) {
  // methods to work with the query string "URLSearchParams"
  const searchParams = new URLSearchParams();

  parameters.forEach((param) => {
    const value = params[param];
    if (param === "category[]" && Array.isArray(value)) {
      value.forEach((item) => {
        searchParams.append("category[]", item);
      });
    } else {
      searchParams.append(param, value);
    }
  });

  return searchParams.toString();
}

// handle fetch flats from api as per parameters above.
const baseURL = "https://dev.goldenhost.co/api/v3/flats/search?";

export default async function getAllFlats(params) {
  try {
    const searchParameters = handleParams(params);
    const response = await fetch(`${baseURL}${searchParameters}`, {
      method: "post",
      headers: {
        "X-SECRET-KEY": "GOLDEN-5mm0jUsfOwCrAANQ6X_uoJkexlL",
        "X-Language": "ar",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`fetching data failed: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}
export async function FetchAll() {
  try {
    const response = await fetch("https://dev.goldenhost.co/api/v3/flats", {
      method: "post",
      headers: {
        "X-SECRET-KEY": "GOLDEN-5mm0jUsfOwCrAANQ6X_uoJkexlL",
        "X-Language": "ar",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`fetching data failed: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}
