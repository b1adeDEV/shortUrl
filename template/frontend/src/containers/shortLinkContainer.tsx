import { useAppDispatch, useAppSelector } from "../store";
import { getShortLink, postList } from "../store/link.slice.ts";
import { ChangeEvent, useState } from "react";

export const ShortLinkContainer = () => {
  const [inputHandler, setInputHanlder] = useState({
    original_url: "",
  });
  const dispatch = useAppDispatch();
  const select = useAppSelector((state) => state);
  const link = select.linkURL.data;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputHanlder({ original_url: e.target.value });
  };

  const clickButton = () => {
    dispatch(postList(inputHandler));
  };

  const onClickUrl = (data: string) => {
    dispatch(getShortLink(data));
    setInputHanlder({ original_url: "" });
  };

  return (
    <div className={"container"}>
      <h1>Shorten your link!</h1>
      <input
        value={inputHandler.original_url}
        onChange={(e) => onInputChange(e)}
        type="text"
        placeholder="Enter URL here"
      />
      <button onClick={clickButton}>Shorten</button>
      {link.short_url ? (
        <a onClick={() => onClickUrl(link.short_url)} href="#">
          http://localhost:8000/{link.short_url}
        </a>
      ) : (
        ""
      )}
    </div>
  );
};
