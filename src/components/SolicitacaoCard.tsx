"use client";

import { Solicitacao } from "@/models/Solicitacao";
import { setCoordenadas } from "@/store/slices/mapSlice";
import { useAppDispatch } from "@/store/store";
import React from "react";

import { format } from "date-fns";

const SolicitacaoCard = ({ props }: { props: Solicitacao }) => {
  const dispatch = useAppDispatch();
  const date = new Date(props.createdAt!).toISOString();

  return (
    <div
      onClick={() => {
        dispatch(
          setCoordenadas(props.endereco.coordernadas.split(",").map(Number))
        );
      }}
      className="flex flex-col border rounded p-2 my-2 shadow hover:bg-gray-50 cursor-pointer"
    >
      <div className="flex flex-row justify-between items-baseline">
        <h4>{props.situacao}</h4>
        <p>
          {new Date(date).toLocaleString("pt-BR", {
            dateStyle: "short",
            timeStyle: "short",
          })}
        </p>
      </div>
      <div className="text-gray-600">
        <p>{props.mensagem}</p>
        <p>
          Local: {props.endereco.cidade} - {props.endereco.bairro}
        </p>
        <p className="text-orange-600">
          Número de pessoas: {props.numeroPessoas}
        </p>
      </div>
    </div>
  );
};

export default SolicitacaoCard;
