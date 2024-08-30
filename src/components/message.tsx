import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export function Message(){

    const [hasReacted, setHasReacted] = useState(false)


    return(
        <li className="mx-4 leading-relaxed text-zinc-100">
        O que é GoLang e quais são suas principais vantagens em comparação com
        outras linguagens de programação como Python, Java ou C++?

        (hasReacted) ? (
            <button type="button" className="mt-3 flex items-center gap-2 text-orange-400 hover:text-orange-400 text-sm font-medium">
          <ArrowUp className="size-4"/>
          Gostar da pergunta (808)
          </button>
        ) : (
            <button type="button" className="mt-3 flex items-center gap-2 text-zinc-400 hover:text-zinc-300 text-sm font-mediu">
            <ArrowUp className="size-4"/>
            Gostar da pergunta (808)
            </button>
        )
        
      </li>
    )
}