import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Volume } from "../types/IBooks";

const useDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [bookDetail, setBookDetail] = useState<Volume | null>(null);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const data = await response.json();
      setBookDetail(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { bookDetail, isLoading, id };
};

export default useDetail;
