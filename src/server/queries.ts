export async function getCategories() {
  const categories = ["js", "ts"];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 100);
  });
}

export async function getCartsByCategory(category: string): Promise<any[]> {
  const mockupCard = [
    {
      id: "what-are-abstract-operations",
      question: "What are abstract operations?",
      "sort-answer":
        "<p>In JavaScript, <strong>abstract operations</strong> are like behind-the-scenes instructions that help the computer understand and handle different kinds of data. They're like special functions that programmers don't need to write themselves, but they're crucial for making sure JavaScript works consistently.</p>",
      category: "JavaScript",
      tags: ["JavaScript", "Coersion"],
    },
    {
      id: "difference-between-undeclared-vs-undefined",
      question: "Difference between undeclared vs undefined",
      "sort-answer":
        "<p><strong>undeclared</strong> means it’s never been created in any scope that we have access to.</p><p><strong>undefined</strong> means there’s a variable and at the moment has no value.</p>",
      category: "JavaScript",
      tags: ["JavaScript", "Types"],
    },
    {
      id: "what-is-coercion",
      question: "What is coercion?",
      "sort-answer":
        "<p><strong>Coercion</strong> is the process of converting a value from one type to another.</p>",
      category: "JavaScript",
      tags: ["JavaScript", "Coersion"],
    },
    {
      id: "what-is-hoisting",
      question: "What is hoisting?",
      "sort-answer":
        "<p><strong>Hoisting</strong> is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.</p>",
      category: "JavaScript",
      tags: ["JavaScript", "Hoisting"],
    },
    {
      id: "what-is-scope",
      question: "What is scope?",
      "sort-answer":
        "<p><strong>Scope</strong> is the context in which a variable is declared. JavaScript has function scope: Each function creates a new scope.</p>",
      category: "JavaScript",
      tags: ["JavaScript", "Scope"],
    },
    {
      id: "what-is-the-difference-between-let-and-var",
      question: "What is the difference between let and var?",
      "sort-answer":
        "<p><strong>var</strong> is function scoped when <strong>let</strong> is block scoped.</p>",
      category: "JavaScript",
      tags: ["JavaScript", "Scope"],
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockupCard);
    }, 100);
  });
}

export async function getCartById(id: string): Promise<{
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "difference-between-undeclared-vs-undefined",
        question: "Difference between undeclared vs undefined",
        answer:
          "<p><strong>undeclared</strong> means it’s never been created in any scope that we have access to.</p><p><strong>undefined</strong> means there’s a variable and at the moment has no value.</p>",
        category: "JavaScript",
        tags: ["JavaScript", "Types"],
      });
    }, 100);
  });
}
