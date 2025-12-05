import { useState, useEffect } from "react";
import { getOrders, getOrderById } from "../services";

export const useListOrder = () => {
  const [listOrders, setListOrders] = useState([]);
  const [termId, setTermId] = useState("");
  const [showDetails, setShowDetails] = useState<ShowDetailsProps>();
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getOrders();
      setListOrders(response);
    };

    fetchData();

    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await getOrderById(termId);

      setShowDetails(response);

      if (response) {
        setOpenDialog(true);
      }
    } catch (error) {
      console.error("Error Fetching data:", error);
    }
  };

  const handleChange = (e: string) => {
    setTermId(e);
  };

  return {
    termId,
    listOrders,
    showDetails,
    openDialog,
    handleSubmit,
    handleChange,
    setOpenDialog,
  };
};
