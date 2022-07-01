import { DefaultLayout } from "components/Layout";
import React, { SyntheticEvent } from "react";
import axios from "axios";

const ExcelPage = () => {
  const [excel, setExcel] = React.useState<string | Blob>("null");
  const [endpoint, setEndpoint] = React.useState("");
  const [images, setImages] = React.useState<any>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(images);

    const data = new FormData();

    data.append("excel", excel);

    for (const img of images) {
      data.append("images[]", img);
    }

    axios
      .post(endpoint, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <DefaultLayout>
      <div className="mx-auto w-[300px]">
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-5">
            <label htmlFor="endpoint">Endpoint</label>
            <input
              className="w-full rounded p-2"
              placeholder="http://localhost:8000/api/excel"
              name="endpoint"
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
            />
          </div>

          <div className="w-full mb-5">
            <label htmlFor="endpoint">Excel</label>
            <input
              type="file"
              required
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              onChange={(e) => setExcel(e.target.files[0])}
            />
          </div>

          <div className="w-full mb-5">
            <label htmlFor="endpoint">Images</label>
            <input
              type="file"
              multiple
              accept="image/gif, image/jpeg, image/png"
              onChange={(e) => {
                setImages(e.target.files);
              }}
            />
          </div>
          <button
            className="w-full p-2 bg-gray-200 dark:bg-gray-600 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default ExcelPage;
