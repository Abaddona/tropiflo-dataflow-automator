import React from 'react';
import { Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const beforeCode = `from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score
import numpy as np

# XOR data
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([0, 1, 1, 0])

pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', RandomForestClassifier(n_estimators=10, random_state=0))
])

pipeline.fit(X, y)
preds = pipeline.predict(X)
accuracy = accuracy_score(y, preds)
print(f'Accuracy: {accuracy:.2f}')
print(f'KPI: {accuracy:.4f}')`;

const afterCode = `import numpy as np
from sklearn.base import TransformerMixin, BaseEstimator
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score
from tqdm import tqdm

class ChebyshevPolyExpansion(BaseEstimator, TransformerMixin):
    def __init__(self, degree=3):
        self.degree = degree
    def fit(self, X, y=None):
        return self
    def transform(self, X):
        X = np.asarray(X)
        X_scaled = 2 * X - 1
        n_samples, n_features = X_scaled.shape
        features = []
        for f in tqdm(range(n_features), desc='Chebyshev features'):
            x = X_scaled[:, f]
            T = np.empty((self.degree + 1, n_samples))
            T[0] = 1
            if self.degree >= 1:
                T[1] = x
            for d in range(2, self.degree + 1):
                T[d] = 2 * x * T[d - 1] - T[d - 2]
            features.append(T.T)
        return np.hstack(features)

X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([0, 1, 1, 0])

pipeline = Pipeline([
    ('cheb', ChebyshevPolyExpansion(degree=3)),
    ('scaler', StandardScaler()),
    ('clf', RandomForestClassifier(n_estimators=10, random_state=0))
])

pipeline.fit(X, y)
preds = pipeline.predict(X)
accuracy = accuracy_score(y, preds)
print(f'Accuracy: {accuracy:.2f}')
print(f'KPI: {accuracy:.4f}')`;

const EvolveSection = () => {
  return (
    <section id="evolve" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Evolve your <span className="gradient-text">ML solution</span> autonomously
          </h2>
          <p className="section-subtitle">
            Co-Datascientist is a KPI fanatic.
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <Code className="text-gray-400 mr-2" />
                <span className="font-bold text-lg">📥 Input</span>
              </div>
              <div className="text-gray-500 text-2xl font-extrabold mb-2">50% <span className="text-3xl">Accuracy</span></div>
              <pre className="bg-gray-100 rounded-lg p-4 text-xs md:text-sm overflow-x-auto mb-2"><code>{beforeCode}</code></pre>
            </div>
            {/* After */}
            <div className="bg-white rounded-xl shadow-md border border-cyan-200 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <Code className="text-cyan-500 mr-2" />
                <span className="font-bold text-lg">🚀 Turbocharged by Co-DataScientist</span>
              </div>
              <div className="text-cyan-600 text-2xl font-extrabold mb-2">100% <span className="text-3xl">Accuracy</span></div>
              <pre className="bg-cyan-50 rounded-lg p-4 text-xs md:text-sm overflow-x-auto mb-2"><code>{afterCode}</code></pre>
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <Button asChild className="btn-primary btn-animated-gradient text-2xl px-12 py-8">
            <a href="https://pypi.org/project/co-datascientist/" target="_blank" rel="noopener noreferrer">
              Get the research preview
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EvolveSection; 