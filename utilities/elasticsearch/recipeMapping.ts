// Mapping obtained from ElasticSearch server
// If you have existed index in ES you may load mapping via
//   GET http://user:pass@localhost:9200/demo_user/_mapping
//   and then get subtree of returned document which contains
//   properties definitions (which looks like following data):

const recipeMapping = {
	properties: {
		articleId: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		asides: {
			properties: {
				description: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				id: {
					type: "long"
				},
				pageItems: {
					properties: {
						content: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						id: {
							type: "long"
						},
						photo: {
							properties: {
								alt: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								filename: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								height: {
									type: "long"
								},
								heroImageUrl: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								id: {
									type: "long"
								},
								imageUrl: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								originalImageUrl: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								width: {
									type: "long"
								}
							}
						},
						title: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						}
					}
				},
				subtitle: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				title: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				type: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				}
			}
		},
		byline: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		cookbookCollection: {
			type: "boolean"
		},
		description: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		documentType: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		friendlyLabel: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		headnote: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		id: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		instructions: {
			properties: {
				content: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				id: {
					type: "long"
				}
			}
		},
		issuedAt: {
			type: "date"
		},
		metaKeywords: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		overview: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		photo: {
			properties: {
				alt: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				filename: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				height: {
					type: "long"
				},
				heroImageUrl: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				id: {
					type: "long"
				},
				imageUrl: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				originalImageUrl: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				width: {
					type: "long"
				}
			}
		},
		recipeIngredientGroups: {
			properties: {
				id: {
					type: "long"
				},
				name: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				recipeIngredients: {
					properties: {
						id: {
							type: "long"
						},
						ingredient: {
							properties: {
								kind: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								name: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								pluralName: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								reviewPath: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								}
							}
						},
						measurement: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						pluralIngredient: {
							type: "boolean"
						},
						post: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						pre: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						quantity: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						}
					}
				}
			}
		},
		recipeReviewables: {
			properties: {
				recipeReviewable: {
					properties: {
						buyNowLink: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						photo: {
							properties: {
								alt: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								filename: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								height: {
									type: "long"
								},
								heroImageUrl: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								id: {
									type: "long"
								},
								imageUrl: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								originalImageUrl: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								width: {
									type: "long"
								}
							}
						},
						reviewSet: {
							properties: {
								link: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								title: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								}
							}
						}
					}
				}
			}
		},
		relateds: {
			properties: {
				label: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				related: {
					properties: {
						buyNowLink: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						description: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						displayName: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						freeSites: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						freeWithRegistrationSites: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						id: {
							type: "long"
						},
						link: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						overview: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						path: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						photo: {
							properties: {
								alt: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								filename: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								height: {
									type: "long"
								},
								heroImageUrl: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								id: {
									type: "long"
								},
								imageUrl: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								originalImageUrl: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								width: {
									type: "long"
								}
							}
						},
						siteList: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						status: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						title: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						type: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						video: {
							properties: {
								externalId: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								photo: {
									properties: {
										alt: {
											type: "text",
											fields: {
												keyword: {
													type: "keyword",
													ignore_above: 256
												}
											}
										},
										filename: {
											type: "text",
											fields: {
												keyword: {
													type: "keyword",
													ignore_above: 256
												}
											}
										},
										height: {
											type: "long"
										},
										heroImageUrl: {
											type: "text",
											fields: {
												keyword: {
													type: "keyword",
													ignore_above: 256
												}
											}
										},
										id: {
											type: "long"
										},
										imageUrl: {
											type: "text",
											fields: {
												keyword: {
													type: "keyword",
													ignore_above: 256
												}
											}
										},
										originalImageUrl: {
											type: "text",
											fields: {
												keyword: {
													type: "keyword",
													ignore_above: 256
												}
											}
										},
										width: {
											type: "long"
										}
									}
								},
								playerId: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								title: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								},
								webUrl: {
									type: "text",
									fields: {
										keyword: {
											type: "keyword",
											ignore_above: 256
										}
									}
								}
							}
						}
					}
				},
				relatedType: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				}
			}
		},
		seoTitle: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		slug: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		status: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		title: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		video: {
			properties: {
				externalId: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				photo: {
					properties: {
						alt: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						filename: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						height: {
							type: "long"
						},
						heroImageUrl: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						id: {
							type: "long"
						},
						imageUrl: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						originalImageUrl: {
							type: "text",
							fields: {
								keyword: {
									type: "keyword",
									ignore_above: 256
								}
							}
						},
						width: {
							type: "long"
						}
					}
				},
				playerId: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				title: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				},
				webUrl: {
					type: "text",
					fields: {
						keyword: {
							type: "keyword",
							ignore_above: 256
						}
					}
				}
			}
		},
		webUrl: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		},
		yields: {
			type: "text",
			fields: {
				keyword: {
					type: "keyword",
					ignore_above: 256
				}
			}
		}
	}
};

export default recipeMapping;