/*
 * Problem: Swap Nodes in Pairs (#24)
 * Difficulty: Medium
 * Topics: Linked List, Recursion
 * Language: JavaScript
 * LeetCode URL: https://leetcode.com/problems/swap-nodes-in-pairs/
 * Solved on: 2026-09-22
 * Runtime: 0
ms | Memory: 11.08
MB
 */

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        ListNode dummy(0);
        dummy.next = head;

