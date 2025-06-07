# Reentrancy Attack

A reentrancy attack allows a malicious contract to call back into the vulnerable contract before the previous function finishes.

## 🔥 Example

The `withdraw()` function in our `VulnerableBank` sends ETH *before* updating the balance, allowing the attacker to repeatedly withdraw.

## ✅ How to Fix

Always **update the state before** transferring ETH. Use reentrancy guards like `ReentrancyGuard` from OpenZeppelin.

## 💡 Activity

- Deploy both the vulnerable and fixed contract
- Simulate an attack
- Write a test that fails on the vulnerable contract but passes on the fixed one
