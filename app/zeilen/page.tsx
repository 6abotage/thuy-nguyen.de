"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ZwischenDenZeilen() {
  return (
    <div className="container mx-auto min-h-full px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-light hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      <h1 className="text-3xl font-light mb-4">Zwischen den Zeilen</h1>
      <div className="mb-8">
        {/* You can include additional elements such as images or slideshows here */}
      </div>
      <p className="text-lg font-light mb-6">
        In unserer modernen Gesellschaft werden wir oft mit bestimmten Erwartungen konfrontiert, die
        unser emotionales Wohlbefinden und unsere Wahrnehmung der Realität beeinflussen. Drei
        Themen, die immer wieder an Bedeutung gewinnen, sind toxische Positivität, Gaslighting und
        Victim Blaming.
      </p>
      <p className="text-lg font-light mb-6">
        Diese drei Themen sind miteinander verflochten und verdeutlichen, wie
        gesellschaftliche Normen und individuelle Verhaltensweisen auf subtile, aber tiefgreifende Weise
        psychische Belastungen hervorrufen können. Sie berauben uns unserer Authentizität und machen
        es schwierig, in einer gesunden Weise mit unseren eigenen Gefühlen, Wahrnehmungen und
        Erfahrungen umzugehen.
      </p>
      <p className="text-lg font-light mb-6">
        Diese Plakatreihe lädt dazu ein, diese Mechanismen zu hinterfragen und
        ein Bewusstsein für die Auswirkungen dieser Phänomene zu schaffen. Indem wir lernen, unsere
        Gefühle anzuerkennen, unsere Wahrnehmung zu verteidigen und Verantwortung dort zu suchen,
        wo sie hingehört, können wir eine Gesellschaft fördern, die gesünder, empathischer und gerechter
        ist.
      </p>
    </div>
  );
}