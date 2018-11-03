/*
// Definition for a Node.
class Node {
public:
    int val = NULL;
    vector<Node*> children;

    Node() {}

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
public:
  vector<vector<int>> levelOrder(Node* root) {
    if (root == NULL) {
      return {};
    }
    vector<vector<int>> res;
    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
      vector<int> level;
      int size = q.size();
      for (int i = 0; i < size; i++) {
        Node* tmp = q.front();
        q.pop();
        level.push_back(tmp->val);
        for (auto n : tmp->children) {
          q.push(n);
        }
      }
      res.push_back(level);
    }

    return res;
  }
};
